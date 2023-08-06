import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';
import { mockUsuarios } from 'src/app/storybook/mocks/usuario.mock';
import { IUsuario, Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private httpClient: HttpClient) {}

  getUsuarios() {
    return of(mockUsuarios).pipe(delay(2000));
  }

  getUsuario(id: number) {
    return of(mockUsuarios.find((usuario) => usuario.id === id));
  }

  agregarUsuario(usuario: IUsuario) {
    mockUsuarios.push(usuario);
    return of(usuario).pipe(delay(2000));
  }

  editarUsuario(usuario: IUsuario) {
    const index = mockUsuarios.findIndex((u) => u.id === usuario.id);
    mockUsuarios[index] = usuario;
    return of(usuario).pipe(delay(2000));
  }

  eliminarUsuario(id: number) {
    const index = mockUsuarios.findIndex((u) => u.id === id);
    mockUsuarios.splice(index, 1);
    return of(id).pipe(delay(2000));
  }
}


