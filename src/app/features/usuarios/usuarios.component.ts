import { Component } from '@angular/core';
import { IUsuario, Usuario } from 'src/app/shared/models/usuario.model';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription, map, finalize } from 'rxjs';
import { MessageComponent } from 'src/app/core/components/message/message.component';
import { MessageActions } from 'src/app/core/models/general.model';
import { BusyService } from 'src/app/core/services/busy.service';
import { mockUsuario, mockUsuarios } from 'src/app/storybook/mocks/usuario.mock';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  /* observable para detectar el tamaño de la pantalla */
  isMobile!: Observable<boolean>;
  /* columnas de la tabla */
  displayedColumns: string[] = ['id', 'nombre', 'rol','status', 'acciones'];
  /* datos de la tabla */
  dataSource = mockUsuarios;
  /* filtro para la tabla */
  filterValue!: string;
  /* datos filtrados */
  filteredDataSource!: IUsuario[];
  /* formulario abierto */
  opened!: boolean;
  /* usuario seleccionado */
  usuario: IUsuario = mockUsuario;
  /* operacion a realizar */
  oper: 'edit' | 'add' | 'delete' | 'view' = 'view';
  /* titulo del formulario */
  formTitle: string = 'Usuario';
  /* suscripcion a los datos */
  dataSuscription!: Subscription;
  /* suscripcion a las operaciones */
  operSuscription!: Subscription;
  /* procesando datos */
  processing: boolean = false;

  /**
   * constructor
   * @param breakpointObserver inyectado para detectar el tamaño de la pantalla
   * @param translateService inyectado para la internacionalizacion
   * @param snackBar inyectado para mostrar mensajes
   * @param usuarioService inyectado para el servicio de usuarios
   * @param busyService inyectado para el servicio de cargando
   * @param dialog inyectado para el servicio de dialogos
   */
  constructor(
    breakpointObserver: BreakpointObserver,
    private translateService: TranslateService,
    private snackBar: MatSnackBar,
    private usuarioService: UsuarioService,
    private busyService: BusyService,
    private dialog: MatDialog,
  ) {
    this.isMobile = breakpointObserver
      .observe('(max-width: 728px)')
      .pipe(map(({ matches }) => (matches)))
  }

  //#region eventos del componente
  /* destruccion */
  ngOnDestroy(): void {
    if (this.dataSuscription) this.dataSuscription.unsubscribe();
    if (this.operSuscription) this.operSuscription.unsubscribe();
  }
  /* inicializacion */
  ngOnInit(): void {
    this.busyService.showProcessing();
    this.dataSuscription = this.usuarioService.getUsuarios()
      .pipe(finalize(() => {
        this.busyService.hideProcessing();
      }))
      .subscribe(usuarios => {
        this.dataSource = usuarios;
        this.filteredDataSource = usuarios;
      });
  }
  //#endregion

  //#region metodos de la tabla
  /**
   * filtra los datos de la tabla
   * @param value valor del filtro
   */
  filter(value: string) {
    this.filteredDataSource = this.dataSource.filter(usuario =>
      usuario.nombre.toLowerCase().includes(value.toLowerCase())
      || usuario.apellido?.toLowerCase().includes(value.toLowerCase())
      || usuario.mail.toLowerCase().includes(value.toLowerCase())
    );
  }
  //#endregion

  //#region operaciones
  /**
   * muestra los detalles del usuario
   * @param item usuario a mostrar
   */
  view(item: IUsuario) {
    this.oper = 'view';
    this.usuario = { ...item };
    this.showForm();
  }

  /**
   * muestra el formulario para editar el usuario
   * @param item usuario a editar
   */
  edit(item: IUsuario) {
    this.oper = 'edit';
    this.usuario = { ...item };
    this.showForm();
  }

  /**
   * muestra el formulario para agregar un usuario
   */
  add() {
    this.oper = 'add';
    this.usuario = new Usuario();
    this.showForm();
  }

  /**
   * elimina el usuario
   * @param item usuario a eliminar
   */
  delete(item: IUsuario) {
    this.usuario = { ...item };
    this.usuario.estado = false;

    const dialogMessage = this.dialog.open(MessageComponent, {
      data: {
        title: this.translateService.instant('features.usuarios.mensajes.delete-title'),
        message: this.translateService.instant('features.usuarios.mensajes.delete-message'),
      },
    });

    dialogMessage.afterClosed().subscribe((result) => {
      if (result?.oper === MessageActions.Confirm)
        this.processEdit(this.usuario, true);
    })
  }

  /**
   * cambia el estado del usuario
   * @param item usuario a cambiar el estado
   */
  changeEstado(item: IUsuario) {
    this.usuario = { ...item };
    this.usuario.estado = !item.estado;
    this.processEdit(this.usuario, true);
  }

  /**
   * realiza la operacion de agregar, editar o eliminar y cierra el formulario
   */
  confirm() {
    switch (this.oper) {
      case 'add': {
        this.processAdd(this.usuario);
      } break;
      case 'edit': {
        this.processEdit(this.usuario);
      } break;
      case 'view': { this.hideForm(); } break;
      default: { throw new Error("Not implemented operation") }
    }

  }
  /**
   * cancela la operacion y cierra el formulario
   */
  cancel() {
    this.hideForm();
  }
  //#endregion

  //#region metodos privados
  /**
   * procesa la operacion de editar
   * @param item usuario a editar
   * @param updateFromTable indica si muestra el componente de carga en la pantalla principal
   */
  private processEdit(item: IUsuario, updateFromTable: boolean = false) {
    if (updateFromTable) this.busyService.showProcessing();
    this.processing = true;
    this.operSuscription = this.usuarioService.editarUsuario(item)
      .pipe(finalize(() => {
        this.processing = false;
        if (updateFromTable) this.busyService.hideProcessing();
      }))
      .subscribe(
        (usuario) => {
          // update tabla local (cuando este la API)
          // const index = this.filteredDataSource.findIndex(usuario => usuario.id === this.usuario.id);
          // const item = this.filteredDataSource[index];
          // Object.keys(this.usuario).forEach(element => { Object(item)[element] = Object(this.usuario)[element]; });
          this.filter('');
          this.snackBar.open(this.translateService.instant('features.usuarios.mensajes.edit-success'));
          this.hideForm();
        },
      );
  }

  /**
   * procesa la operacion de agregar
   * @param item usuario a agregar
   */
  private processAdd(item: IUsuario) {
    this.processing = true;
    this.operSuscription = this.usuarioService.agregarUsuario(item)
      .pipe(finalize(() => {
        this.processing = false;
      }))
      .subscribe(
        (usuario) => {
          // update tabla local (cuando este la API)
          // this.dataSource = [...this.dataSource, this.usuario];
          this.filter('');
          this.snackBar.open(this.translateService.instant('features.usuarios.mensajes.add-success'));
          this.hideForm();
        },
      );
  }
  /**
   * procesa la operacion de eliminar
   * @param item usuario a eliminar
   */
  private processDelete(item: IUsuario) {
    this.busyService.showProcessing();
    this.operSuscription = this.usuarioService.eliminarUsuario(item.id)
      .pipe(finalize(() => {
        this.busyService.hideProcessing();
      }))
      .subscribe(
        (response) => {
          // update tabla local (cuando este la API)
          // const index = this.filteredDataSource.findIndex(usuario => usuario.id === item.id);
          // this.filteredDataSource.splice(index, 1);
          this.filter('');
          this.snackBar.open(this.translateService.instant('features.usuarios.mensajes.delete-success'));
        },
      );
  }
  /**
   * establece el titulo del formulario
   */
  private setFormTitle() {
    switch (this.oper) {
      case 'add': {
        this.formTitle = this.translateService.instant('features.usuarios.form.add');
      } break;
      case 'edit': {
        this.formTitle = this.translateService.instant('features.usuarios.form.edit');
      } break;
      case 'view': {
        this.formTitle = this.translateService.instant('features.usuarios.form.view');
      } break;
      default: { throw new Error("Not implemented operation") }
    }
  }

  /**
   * muestra el formulario
   */
  private showForm() {
    this.setFormTitle();
    this.opened = true;
  }
  /**
   * oculta el formulario
   */
  private hideForm() {
    this.opened = false;
  }

  //#endregion
}
