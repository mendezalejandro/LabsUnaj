import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario, IUsuarioSesion, UsuarioActualizar } from '../models/usuario.model';
import { environment } from 'src/app/environments/environment';
import { RolTypes } from '../models/roles.model';
import { filter, of, switchMap } from 'rxjs';
import { RequestOptions, RequestService } from 'src/app/core/services/helpers/request.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  /* api endpoint */
  apiEndpoint: string = environment.apiEndpoint;
  /**
   * constructor de UsuarioService
   * @param httpClient cliente http
   */
  constructor(private httpClient: RequestService) { }

  /**
   * obtiene los usuarios
   * @returns usuarios
   */
  getUsuarios() {
    const endpoint = `${this.apiEndpoint}/usuarios`;
    return this.httpClient.get<IUsuario[]>(endpoint).pipe(
      switchMap(data=>of(data.filter(x=>x.rol!==RolTypes.Sistema)))
    );
  }

  /**
 * obtiene los alumnos
 * @returns usuarios con rol alumno
 */
  getAlumnos() {
    const endpoint = `${this.apiEndpoint}/usuarios?idRol=${RolTypes.Alumno}`;
    return this.httpClient.get<IUsuario[]>(endpoint);
  }
  /**
   * obtiene un usuario
   * @param id identificador del usuario
   * @returns usuario
   */
  getUsuario(id: number) {
    const endpoint = `${this.apiEndpoint}/usuario/${id}`;
    return this.httpClient.get<IUsuario>(endpoint);
  }
  /**
   * obtiene el usuario logueado
   * @returns usuario logueado
   */
  getUsuarioLogueado() {
    const cachedData = localStorage.getItem('labunaj_session');
    const usuarioSession = JSON.parse(cachedData!!) as IUsuarioSesion;
    return usuarioSession;
  }
  /**
   * agrega un usuario
   * @param usuario usuario a agregar
   * @returns usuario agregado
   */
  agregarUsuario(usuario: IUsuario) {
    usuario.esAdmin = true;
    const endpoint = `${this.apiEndpoint}/usuario`;
    const requestOptions = { withToken: true} as RequestOptions;
    return this.httpClient.post<IUsuario>(endpoint, usuario, requestOptions);
  }

  /**
 * registrar un usuario
 * @param usuario usuario a registrar
 * @returns usuario registrado
 */
  registrarUsuario(usuario: IUsuario) {
    usuario.esAdmin = false;
    const endpoint = `${this.apiEndpoint}/usuario`;
    const requestOptions = { withToken: false} as RequestOptions;
    return this.httpClient.post<IUsuario>(endpoint, usuario, requestOptions);
  }
  /**
 * activate un usuario
 * @param usuario usuario a activar
 * @returns usuario activado
 */
  activarUsuario(usuarioid: number) {
    const requestOptions = { withToken: false} as RequestOptions;
    const endpoint = `${this.apiEndpoint}/usuario/activar/${usuarioid}`;
    return this.httpClient.put<IUsuario>(endpoint, {}, requestOptions);
  }
  
  /**
   * envia un email de recuperacion de contraseña
   * @param email email del usuario
   * @returns usuario
   */
  enviarEmailRecuperacion(email: string){
    const params = {
      mail: email
    };
    const requestOptions = { withToken: false} as RequestOptions;
    const endpoint = `${this.apiEndpoint}/usuario/recuperar-contrasena/enviar-mail`;
    return this.httpClient.post<IUsuario>(endpoint, params, requestOptions);
  }

  /**
 * actualizar una contraseña
 * @param usuario usuario a actualizar
 * @returns usuario activado
 */
  actualizarContrasena(usuarioid: number, contrasena: string) {
    const params = {
      contrasena: contrasena
    };
    const requestOptions = { withToken: false} as RequestOptions;
    const endpoint = `${this.apiEndpoint}/usuario/${usuarioid}/recuperar-contrasena`;
    return this.httpClient.put<IUsuario>(endpoint, params, requestOptions);
  }
  /**
   * edita un usuario
   * @param usuario usuario a editar
   * @returns usuario editado
   */
  editarUsuario(usuario: IUsuario) {
    const endpoint = `${this.apiEndpoint}/usuario/datos-personales/${usuario.id}`;
    const requestOptions = { withToken: true} as RequestOptions;
    return this.httpClient.put<IUsuario>(endpoint, usuario,requestOptions);
  }

  /**
   * elimina un usuario
   * @param id identificador del usuario a eliminar
   * @returns usuario eliminado
   */
  eliminarUsuario(id: number) {
    const endpoint = `${this.apiEndpoint}/usuario/${id}`;
    return this.httpClient.delete(endpoint);
  }
}


