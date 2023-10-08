import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { IDisponibilidad } from '../models/turno.model';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  apiEndpoint = environment.apiEndpoint;
  constructor(private httpClient: HttpClient) { }

  getHorariosDispoinibles(idLaboratorio: number, fecha: string) {
    const endpoint = `${this.apiEndpoint}/turnos/horarios`;
    const queryParams = {
      idLaboratorio: idLaboratorio,
      fecha: fecha
    };
    return this.httpClient.get<IDisponibilidad[]>(endpoint, { params: queryParams });
  }
}
