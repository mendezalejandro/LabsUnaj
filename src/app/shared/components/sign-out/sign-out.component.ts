import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent {
  /**
   * constructor del componente
   * @param authService servicio de autenticacion
   * @param routerService servicio de ruteo
   */
  constructor(private authService: AuthService) { }
  /**
   * cierra la sesion del usuario y lo redirige al home
   */
  signOut() {
    this.authService.signout();
  } 
}
