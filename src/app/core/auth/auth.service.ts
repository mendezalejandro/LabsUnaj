import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, of,  tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { IUsuario, IUsuarioSesion } from 'src/app/shared/models/usuario.model';
import { RequestOptions, RequestService } from '../services/helpers/request.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /** flag que indica si el usuario esta logueado */
  isLogged$: Subject<boolean> = new Subject<boolean>();
  /* api endpoint */
  apiEndpoint: string = environment.apiEndpoint;
  /**
   * constructor del componente
   * @param http servicio http
   */
  constructor(private http: RequestService, private routerService: Router) { }

  /**
   * loguea al usuario
   * @param nombreUsuario nombre de usuario
   * @param contrasena contraseña
   * @returns `Observable` con el usuario logueado
   */
  signin(nombreUsuario: string, contrasena: string) {
    const endpoint = `${this.apiEndpoint}/usuario/conectar`;
    const requestOptions = { withToken: false} as RequestOptions;
    return this.http.post<IUsuarioSesion>(`${endpoint}`, { nombreUsuario, contrasena },requestOptions).pipe(
      tap((usuario) => {
        const sesion: IUsuarioSesion = {
          id: usuario.id,
          nombreUsuario: usuario.nombreUsuario,
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          estado: usuario.estado,
          rol: usuario.rol,
          tokenSesion: usuario.tokenSesion,
          vencimiento: new Date(),
        };
        this.saveSession(sesion);
        return of(sesion);
      })
    );
  }
  /**
   * desloguea al usuario
   */
  signout() {
    this.closeSession();
    this.isLogged$.next(false);
    this.routerService.navigate(['/home']);
  }

  /**
   * verifica si el usuario esta logueado
   * @returns true si esta logueado, false si no lo esta
   */
  isLogged() {
    const cachedData = localStorage.getItem("labunaj_session");

    const isLogged = !!cachedData && !this.checkSesionExpired();
    this.isLogged$.next(isLogged);

    if (isLogged) 
      return true;
    else return false;
  }


  /**
   * obtiene el token del usuario
   * @returns token del usuario
   */
  getUserToken() {
    const cachedData = this.getSession();
    return cachedData.tokenSesion;
  }

  /**
   * guarda la sesion del usuario
   * @param sesion sesion del usuario
   */
  saveSession(sesion: IUsuarioSesion) {
    sesion.vencimiento = new Date();
    sesion.vencimiento.setHours(sesion.vencimiento.getHours() + 24);
    localStorage.setItem("labunaj_session", JSON.stringify(sesion));
  }

  /**
   * obtiene la sesion del usuario
   * @param sesion sesion del usuario
   */
  getSession(sesion?: IUsuarioSesion) {
    const cachedData = localStorage.getItem("labunaj_session");
    if (cachedData) return JSON.parse(cachedData);
    else if(!sesion){
      this.closeSession();
      // throw new Error("El usuario no se encuentra logueado");
    }
    else {
      this.saveSession(sesion);
      return sesion;
    }
  }

  /**
   * cierra la sesion del usuario
   */
  closeSession() {
    localStorage.removeItem("labunaj_session");
  }

  /**
   * verifica si la sesion del usuario expiro
   * @returns true si expiro, false si no
   */
  checkSesionExpired(): boolean {
    const cachedData = localStorage.getItem("labunaj_session");
    if (cachedData) {
      const sesion = JSON.parse(cachedData);
      const now = new Date().getTime();
      return sesion.vencimiento < now;
    } return false;
  }

  /**
   * obtiene el usuario
   * @param nombreUsuario nombre de usuario
   * @returns `Observable` con el usuario
   */
  getUsuario(nombreUsuario: string) {
    const endpoint = `${this.apiEndpoint}/usuario/${nombreUsuario}`;
    return this.http.get<IUsuario>(endpoint);
  }
}
