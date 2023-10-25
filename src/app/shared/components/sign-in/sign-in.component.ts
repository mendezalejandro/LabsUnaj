import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnDestroy {
  /** nombre de usuario */
  usuario: string = '';
  /** contraseña */
  contrasena: string = '';
  suscripcion!: Subscription;
  /**
   * constructor del componente
   * @param authService servicio de autenticacion
   * @param routerService servicio de ruteo
   */
  constructor(private authService: AuthService, private routerService: Router) { }
  /**
   * ngOnDestroy hook
   */
  ngOnDestroy(): void {
    if (this.suscripcion) this.suscripcion.unsubscribe();
  }
  /**
   * loguea al usuario
   */
  signIn() {
    this.suscripcion = this.authService.signin(this.usuario, this.contrasena).pipe(
      tap((sesion) => {
        this.routerService.navigate(['dashboard']);
      })
    ).subscribe();
  }
  /**
   * envia al usuario a la pagina para recuperar contraseña
   */
  toRecovery() {
    this.routerService.navigate(['recovery']);
  }
}


