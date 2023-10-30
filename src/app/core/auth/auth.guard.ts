import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router, RouterStateSnapshot, ActivatedRouteSnapshot, Data } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { Rol } from 'src/app/shared/models/roles.model';

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
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const isLogged = this.authService.isLogged();
    const havePermissions = this.havePermissions(route.data);

    if(isLogged && havePermissions)
      return of(true);
    else
      return of(this.router.parseUrl('/home'));
  }

  /**
   * verifica si el usuario tiene los permisos necesarios
   * @param data configuracion de la ruta
   * @returns true si tiene los permisos, false si no los tiene
   */
  havePermissions(data: Data): boolean {
    const requiredRoles = data['role'];
    // si no tiene configuracion por roles, entonces cualquiera puede acceder
    if(!requiredRoles) return true;

    const userRole = this.authService.getSession().rol;
    return requiredRoles.includes(userRole);
  }
}