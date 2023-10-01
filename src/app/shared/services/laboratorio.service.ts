import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILaboratorio, ILaboratorioResponse } from '../models/laboratorio.model';
import { environment } from 'src/app/environments/environment';

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
   * @returns laboratorios
   */
  getLaboratorios() {
    return this.httpClient.get<ILaboratorio[]>(this.endpoint);
  }

  /**
   * obtiene un laboratorio
   * @param id identificador del laboratorio
   * @returns laboratorio
   */
  getLaboratorio(id: number) {
    const endpoint = `${this.endpoint}/${id}`;
    return this.httpClient.get<ILaboratorio>(endpoint);
  }

  /**
   * agrega un laboratorio
   * @param laboratorio laboratorio a agregar
   * @returns laboratorio agregado
   */
  addLaboratorio(laboratorio: ILaboratorio) {
    return this.httpClient.post<ILaboratorioResponse>(this.endpoint, laboratorio);
  }

  /**
   * edita un laboratorio
   * @param laboratorio laboratorio a editar
   * @returns laboratorio editado
   */
  editLaboratorio(laboratorio: ILaboratorio) {
    const endpoint = `${this.endpoint}/${laboratorio.id}`;
    return this.httpClient.put<ILaboratorio>(endpoint, laboratorio);
  }

  /**
   * elimina un laboratorio
   * @param id identificador del laboratorio a eliminar
   * @returns laboratorio eliminado
   */
  deleteLaboratorio(id: number) {
    const endpoint = `${this.endpoint}/${id}`;
    return this.httpClient.delete(endpoint);
  }
}
