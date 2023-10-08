import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   * constructor del componente
   * @param router servicio de ruteo
   * @param authService servicio de autenticacion
   */
  constructor(private router: Router, private authService: AuthService){
  }
  /**
   * verifica si el usuario esta logueado
   * @returns true si esta logueado, false si no lo esta
   */
  canActivate(): Observable<boolean | UrlTree> {
    const isLogged = this.authService.isLogged();
    if(isLogged)
      return of(true);
    else
      return of(this.router.parseUrl('/home'));
  }
}