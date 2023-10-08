import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { IUsuarioSesion } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /* flag que indica si el formulario esta abierto */
  opened!: boolean;
  /* usuario logueado */
  usuarioLogueado: IUsuarioSesion = this.usuarioService.getUsuarioLogueado();
  /**
   * constructor de DashboardComponent
   * @param usuarioService servicio de usuarios
   */
  constructor(
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
    ) {
  }

  turnoConfirmado($event: boolean) {
    this.opened = false;
    this.snackBar.open(this.translateService.instant('features.dashboard.turno-confirmado'));
  }
}
