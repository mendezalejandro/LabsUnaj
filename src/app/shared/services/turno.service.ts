import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { IDisponibilidad, ITurnoVigente, TurnoConfirmacion } from '../models/turno.model';
import { DateTime } from 'luxon';
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
   * @param nombreUsuario nombre del usuario
   * @returns lista de turnos vigentes
   */
  getTurnosVigentes(nombreUsuario: string) {
    const endpoint = `${this.apiEndpoint}/turnos/disponibles`;
    const queryParams = {
      username: nombreUsuario
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
  confirmarTurno(nombreUsuario: string, idLaboratorio: number, fecha: string, hora: string) {
    const dateIni= DateTime.fromISO(`${fecha}T${hora}`).toISO({ includeOffset: false }) as string;
    const dateEnd= DateTime.fromISO(`${fecha}T${hora}`).plus({ minutes: 30 }).toISO({ includeOffset: false }) as string;

    const p = new TurnoConfirmacion(dateIni, dateEnd, nombreUsuario, idLaboratorio);
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
}
