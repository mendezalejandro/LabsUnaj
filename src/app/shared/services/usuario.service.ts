import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../models/usuario.model';
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
  constructor(private httpClient: HttpClient) {}

  /**
   * obtiene los usuarios
   * @returns usuarios
   */
  getUsuarios() {
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
   * agrega un usuario
   * @param usuario usuario a agregar
   * @returns usuario agregado
   */
  agregarUsuario(usuario: IUsuario) {
    const endpoint = `${this.apiEndpoint}/usuario`;
    return this.httpClient.post<IUsuario>(endpoint, usuario);
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


