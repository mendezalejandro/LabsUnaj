import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario, IUsuarioSesion, UsuarioActualizar } from '../models/usuario.model';
import { environment } from 'src/app/environments/environment';

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
  constructor(private httpClient: HttpClient) { }

  /**
   * obtiene los usuarios
   * @returns usuarios
   */
  getUsuarios() {
    const endpoint = `${this.apiEndpoint}/usuarios`;
    return this.httpClient.get<IUsuario[]>(endpoint);
  }

  /**
 * obtiene los alumnos
 * @returns usuarios con rol alumno
 */
  getAlumnos() {
    const endpoint = `${this.apiEndpoint}/usuarios`;
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
    return this.httpClient.post<IUsuario>(endpoint, usuario);
  }

  /**
 * registrar un usuario
 * @param usuario usuario a registrar
 * @returns usuario registrado
 */
  registrarUsuario(usuario: IUsuario) {
    usuario.esAdmin = false;
    const endpoint = `${this.apiEndpoint}/usuario`;
    return this.httpClient.post<IUsuario>(endpoint, usuario);
  }
  /**
 * activate un usuario
 * @param usuario usuario a activar
 * @returns usuario activado
 */
  activarUsuario(usuarioid: number) {
    const params = new UsuarioActualizar();
    params.registrado = true;

    const endpoint = `${this.apiEndpoint}/usuario/datos-personales/${usuarioid}`;
    return this.httpClient.put<IUsuario>(endpoint, params);
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
    const endpoint = `${this.apiEndpoint}/usuario/recuperar-contrasena/enviar-mail`;
    return this.httpClient.post<IUsuario>(endpoint, params);
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

    const endpoint = `${this.apiEndpoint}/usuario/${usuarioid}/recuperar-contrasena`;
    return this.httpClient.put<IUsuario>(endpoint, params);
  }
  /**
   * edita un usuario
   * @param usuario usuario a editar
   * @returns usuario editado
   */
  editarUsuario(usuario: IUsuario) {
    const endpoint = `${this.apiEndpoint}/usuario/${usuario.id}`;
    return this.httpClient.put<IUsuario>(endpoint, usuario);
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


