import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILaboratorio, ILaboratorioResponse } from '../models/laboratorio.model';
import { environment } from 'src/app/environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {
  apiEndpoint: string = environment.apiEndpoint;
  apiController: string = "laboratorios";
  endpoint: string = `${this.apiEndpoint}/${this.apiController}`;
  constructor(private httpClient: HttpClient) {
  }

  /**
   * obtiene los laboratorios
   * @param disponible indica si se obtienen los laboratorios disponibles
   * @returns laboratorios
   */
  getLaboratorios(disponible?: boolean|null) {
    let endpoint = this.endpoint;
    if (disponible != null) {
      endpoint = `${this.apiEndpoint}/laboratorios?disponible=${disponible}`;
    }
    return this.httpClient.get<ILaboratorio[]>(endpoint);
  }

  /**
   * obtiene un laboratorio
   * @param id identificador del laboratorio
   * @returns laboratorio
   */
  getLaboratorio(id: number) {
    const endpoint = `${this.apiEndpoint}/laboratorio/${id}`;
    return this.httpClient.get<ILaboratorio>(endpoint);
  }

  /**
   * agrega un laboratorio
   * @param laboratorio laboratorio a agregar
   * @returns laboratorio agregado
   */
  addLaboratorio(laboratorio: ILaboratorio) {
    const endpoint = `${this.apiEndpoint}/laboratorio`;
    return this.httpClient.post<ILaboratorio>(endpoint, laboratorio);
  }

  /**
   * edita un laboratorio
   * @param laboratorio laboratorio a editar
   * @returns laboratorio editado
   */
  editLaboratorio(laboratorio: ILaboratorio) {
    const endpoint = `${this.apiEndpoint}/laboratorio/${laboratorio.id}`;
    return this.httpClient.put<ILaboratorio>(endpoint, laboratorio);
  }

  /**
   * elimina un laboratorio
   * @param id identificador del laboratorio a eliminar
   * @returns laboratorio eliminado
   */
  deleteLaboratorio(id: number) {
    const endpoint = `${this.apiEndpoint}/laboratorio/${id}`;
    return this.httpClient.delete(endpoint);
  }
}
