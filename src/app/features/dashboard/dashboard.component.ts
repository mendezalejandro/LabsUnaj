import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { PerfilService } from 'src/app/core/services/profile.services';
import { ITurnoVigente, Turno } from 'src/app/shared/models/turno.model';
import { IUsuarioSesion } from 'src/app/shared/models/usuario.model';
import { TurnoService } from 'src/app/shared/services/turno.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { CancelarTurnoComponent } from './cancelar-turno/cancelar-turno.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /* flag que indica si el formulario esta abierto */
  opened!: boolean;
  /* usuario logueado */
  usuarioLogueado: IUsuarioSesion = this.usuarioService.getUsuarioLogueado();
  /* lista de turnos vigentes */
  turnosVigentes$!: Observable<ITurnoVigente[]>;
  /* idioma del usuario */
  locale: string = this.perfilService.getLocale();
  /**
   * constructor de DashboardComponent
   * @param usuarioService servicio de usuarios
   * @param turnosService servicio de turnos
   * @param snackBar servicio de snackbar
   * @param translateService servicio de traduccion
   * @param perfilService servicio de perfil
   * @param dialog servicio de dialog
   */
  constructor(
    private usuarioService: UsuarioService,
    private turnosService: TurnoService,
    private snackBar: MatSnackBar,
    private translateService: TranslateService,
    private perfilService: PerfilService,
    public dialog: MatDialog
    ) {
  }

  /**
   * metodo que inicializa el componente
   */
  ngOnInit(): void {
    this.turnosVigentes$ = this.turnosService.getTurnosVigentes(this.usuarioLogueado.nombreUsuario);
  }

  /**
   * metodo que confirma un turno
   */
  turnoConfirmado($event: boolean) {
    this.opened = false;
    this.snackBar.open(this.translateService.instant('features.dashboard.turno-confirmado'));
    this.turnosVigentes$ = this.turnosService.getTurnosVigentes(this.usuarioLogueado.nombreUsuario);
  }

  /**
   * metodo que cancela un turno
   */
  cancelarTurno(idTurno: number){
    const dialogRef = this.dialog.open(CancelarTurnoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.turnosService.cancelarTurno(idTurno).subscribe(
          () => {
            this.snackBar.open(this.translateService.instant('features.dashboard.turno-cancelado'));
            this.turnosVigentes$ = this.turnosService.getTurnosVigentes(this.usuarioLogueado.nombreUsuario);
          }
        );
      }
    });
  }
}
