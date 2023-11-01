import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription, finalize, map } from 'rxjs';
import { MessageComponent } from 'src/app/core/components/message/message.component';
import { MessageActions } from 'src/app/core/models/general.model';
import { BusyService } from 'src/app/core/services/busy.service';
import { ILaboratorio, Laboratorio } from 'src/app/shared/models/laboratorio.model';
import { LaboratorioService } from 'src/app/shared/services/laboratorio.service';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';


@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrls: ['./laboratorios.component.scss']
})
export class LaboratoriosComponent implements OnInit, OnDestroy {
  @ViewChild('labComponent') labComponent!: LaboratorioComponent;
  /* observable para detectar el tamaño de la pantalla */
  isMobile!: Observable<boolean>;
  /* columnas de la tabla */
  displayedColumns: string[] = ['id', 'imagen', 'nombre', 'disponible', 'estado', 'acciones'];
  /* datos de la tabla */
  dataSource: ILaboratorio[] = [];
  /* filtro para la tabla */
  filterValue!: string;
  /* datos filtrados */
  filteredDataSource!: ILaboratorio[];
  /* formulario abierto */
  opened!: boolean;
  /* laboratorio seleccionado */
  laboratorio!: ILaboratorio;
  /* operacion a realizar */
  oper: 'edit' | 'add' | 'delete' | 'view' = 'view';
  /* titulo del formulario */
  formTitle: string = 'Laboratorio';
  /* suscripcion a los datos */
  dataSuscription!: Subscription;
  /* suscripcion a las operaciones */
  operSuscription!: Subscription;
  /* procesando datos */
  processing: boolean = false;
  /** estado del formulario */
  formStatus: boolean = false;
  /**
   * constructor
   * @param breakpointObserver inyectado para detectar el tamaño de la pantalla
   * @param translateService inyectado para la internacionalizacion
   * @param snackBar inyectado para mostrar mensajes
   * @param laboratorioService inyectado para el servicio de laboratorios
   * @param busyService inyectado para el servicio de cargando
   * @param dialog inyectado para el servicio de dialogos
   */
  constructor(
    breakpointObserver: BreakpointObserver,
    private translateService: TranslateService,
    private snackBar: MatSnackBar,
    private laboratorioService: LaboratorioService,
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
    this.dataSuscription = this.laboratorioService.getLaboratorios()
      .pipe(finalize(() => {
        this.busyService.hideProcessing();
      }))
      .subscribe(laboratorios => {
        this.dataSource = laboratorios;
        this.filteredDataSource = laboratorios;
      });
  }
  //#endregion

  //#region metodos de la tabla
  /**
   * filtra los datos de la tabla
   * @param value valor del filtro
   */
  filter(value: string) {
    this.filteredDataSource = this.dataSource.filter(laboratorio =>
      laboratorio.nombre.toLowerCase().includes(value.toLowerCase())
      || laboratorio.descripcion?.toLowerCase().includes(value.toLowerCase())
      || laboratorio.titulo.toLowerCase().includes(value.toLowerCase())
    );
  }
  //#endregion

  //#region operaciones
  /**
   * muestra los detalles del laboratorio
   * @param item laboratorio a mostrar
   */
  view(item: ILaboratorio) {
    this.oper = 'view';
    this.laboratorio = { ...item };
    this.showForm();
  }

  /**
   * muestra el formulario para editar el laboratorio
   * @param item laboratorio a editar
   */
  edit(item: ILaboratorio) {
    this.oper = 'edit';
    this.laboratorio = { ...item };
    this.showForm();
  }

  /**
   * muestra el formulario para agregar un laboratorio
   */
  add() {
    this.oper = 'add';
    this.laboratorio = new Laboratorio();
    this.showForm();
  }

  /**
   * elimina el laboratorio
   * @param item laboratorio a eliminar
   */
  delete(item: ILaboratorio) {
    this.laboratorio = { ...item };
    this.laboratorio.disponible = false;
    this.laboratorio.estado = false;

    const dialogMessage = this.dialog.open(MessageComponent, {
      data: {
        title: this.translateService.instant('features.laboratorios.mensajes.delete-title'),
        message: this.translateService.instant('features.laboratorios.mensajes.delete-message'),
      },
    });

    dialogMessage.afterClosed().subscribe((result) => {
      if (result?.oper === MessageActions.Confirm)
        this.processDelete(this.laboratorio);
    })
  }

  /**
   * cambia la disponibilidad del laboratorio
   * @param item laboratorio a cambiar la disponibilidad
   */
  changeDisponible(item: ILaboratorio) {
    this.laboratorio = { ...item };
    this.laboratorio.disponible = !item.disponible;
    this.processEdit(this.laboratorio, true);
  }
  /**
   * cambia el estado del laboratorio
   * @param item laboratorio a cambiar el estado
   */
  changeEstado(item: ILaboratorio) {
    this.laboratorio = { ...item };
    this.laboratorio.estado = !item.disponible;
    this.processEdit(this.laboratorio, true);
  }

  /**
   * realiza la operacion de agregar, editar o eliminar y cierra el formulario
   */
  confirm() {
    switch (this.oper) {
      case 'add': {
        this.processAdd(this.laboratorio);
      } break;
      case 'edit': {
        this.processEdit(this.laboratorio);
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
   * @param item laboratorio a editar
   * @param updateFromTable indica si muestra el componente de carga en la pantalla principal
   */
  private processEdit(item: ILaboratorio, updateFromTable: boolean = false) {
    if (updateFromTable) this.busyService.showProcessing();
    this.processing = true;
    this.operSuscription = this.laboratorioService.editLaboratorio(item)
      .pipe(finalize(() => {
        this.processing = false;
        if (updateFromTable) this.busyService.hideProcessing();
      }))
      .subscribe(
        (laboratorio) => {
          const index = this.filteredDataSource.findIndex(laboratorio => laboratorio.id === this.laboratorio.id);
          const item = this.filteredDataSource[index];
          Object.keys(this.laboratorio).forEach(element => { Object(item)[element] = Object(this.laboratorio)[element]; });
          this.filter('');
          this.snackBar.open(this.translateService.instant('features.laboratorios.mensajes.edit-success'));
          this.hideForm();
        },
      );
  }

  /**
   * procesa la operacion de agregar
   * @param item laboratorio a agregar
   */
  private processAdd(item: ILaboratorio) {
    this.processing = true;
    this.operSuscription = this.laboratorioService.addLaboratorio(item)
      .pipe(finalize(() => {
        this.processing = false;
      }))
      .subscribe(
        (response) => {
          // update tabla local (cuando este la API)
          this.dataSource = [...this.dataSource, response];
          this.filter('');
          this.snackBar.open(this.translateService.instant('features.laboratorios.mensajes.add-success'));
          this.hideForm();
        },
      );
  }
  /**
   * procesa la operacion de eliminar
   * @param item laboratorio a eliminar
   */
  private processDelete(item: ILaboratorio) {
    this.busyService.showProcessing();
    this.operSuscription = this.laboratorioService.deleteLaboratorio(item.id)
      .pipe(finalize(() => {
        this.busyService.hideProcessing();
      }))
      .subscribe(
        (response) => {
          const index = this.dataSource.findIndex(laboratorio => laboratorio.id === item.id);
          this.dataSource.splice(index, 1);
          this.filter('');
          this.snackBar.open(this.translateService.instant('features.laboratorios.mensajes.delete-success'));
        },
      );
  }
  /**
   * establece el titulo del formulario
   */
  private setFormTitle() {
    switch (this.oper) {
      case 'add': {
        this.formTitle = this.translateService.instant('features.laboratorios.form.add');
      } break;
      case 'edit': {
        this.formTitle = this.translateService.instant('features.laboratorios.form.edit');
      } break;
      case 'view': {
        this.formTitle = this.translateService.instant('features.laboratorios.form.view');
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
