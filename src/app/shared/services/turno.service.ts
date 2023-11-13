import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { IDisponibilidad, ITurnoBusqueda, ITurnoData, ITurnoVigente, TurnoConfirmacion } from '../models/turno.model';
import { DateTime } from 'luxon';
import { of } from 'rxjs';
import { mockTurnosData } from 'src/app/storybook/mocks/turnos.mock';
@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  apiEndpoint = environment.apiEndpoint;
  constructor(private httpClient: HttpClient) { }

  /**
   * metodo que obtiene los horarios disponibles
   * @param idLaboratorio laboratorio seleccionado
   * @param fecha fecha seleccionada
   * @returns lista de horarios disponibles
   */
  getHorariosDisponibles(idLaboratorio: number, fecha: string) {
    const endpoint = `${this.apiEndpoint}/turnos/horarios`;
    const queryParams = {
      idLaboratorio: idLaboratorio,
      fecha: fecha
    };
    return this.httpClient.get<IDisponibilidad[]>(endpoint, { params: queryParams });
  }

  /**
   * metodo que obtiene los turnos vigentes del usuario
   * @param idUsuario id del usuario
   * @returns lista de turnos vigentes
   */
  getTurnosVigentes(idUsuario: number) {
    const endpoint = `${this.apiEndpoint}/turnos/disponibles`;
    const queryParams = {
      idUsuario: idUsuario
    };
    return this.httpClient.get<ITurnoVigente[]>(endpoint, { params: queryParams });
  }
  /**
   * metodo que confirma un turno
   * @param nombreUsuario nombre del usuario
   * @param idLaboratorio laboratorio seleccionado
   * @param fecha fecha del turno
   * @param hora hora del turno
   * @returns 
   */
  confirmarTurno(idUsuario: number, idLaboratorio: number, fecha: string, hora: string) {
    const dateIni= DateTime.fromISO(`${fecha}T${hora}`).toISO({ includeOffset: false }) as string;

    const p = new TurnoConfirmacion(dateIni, idUsuario, idLaboratorio);
    const endpoint = `${this.apiEndpoint}/turno`;
    return this.httpClient.post(endpoint, p);
  }

  /**
   * metodo que cancela un turno
   * @param idTurno id del turno
   */
  cancelarTurno(idTurno: number) {
    const endpoint = `${this.apiEndpoint}/turno/${idTurno}`;
    return this.httpClient.delete(endpoint);
  }

  /**
   * metodo que obtiene el turno habilitado
   * @param idTurno id del turno
   * @returns url del laboratorio
   */
  getTurnoHabilitado(idTurno: number) {
    const endpoint = `${this.apiEndpoint}/turno/${idTurno}`;
    return this.httpClient.get(endpoint);
  }

  /**
   * metodo que obtiene los turnos
   * @param p parametros de busqueda
   * @returns lista de turnos
   */
  getTurnos(p: ITurnoBusqueda) {
    let queryParams={} as any;
    if(p.disponible!=null) queryParams.disponible=p.disponible;
    if(p.fechaDesde!=null) queryParams.fechaDesde=p.fechaDesde;
    if(p.fechaHasta!=null) queryParams.fechaHasta=p.fechaHasta;
    if(p.idUsuario!=null) queryParams.idUsuario=p.idUsuario;
    if(p.idLaboratorio!=null) queryParams.idLaboratorio=p.idLaboratorio;

    const endpoint = `${this.apiEndpoint}/turnos`;
    return this.httpClient.get<ITurnoData[]>(endpoint, { params: queryParams });
  }
}
