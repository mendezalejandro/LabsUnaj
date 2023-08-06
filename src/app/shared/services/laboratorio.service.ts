import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, interval, map, of } from 'rxjs';
import { mockLaboratorios } from 'src/app/storybook/mocks/laboratorios.mock';
import { ILaboratorio } from '../models/laboratorio.model';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  constructor(private httpClient: HttpClient) { 
  }

  getLaboratorios() {
    return of(mockLaboratorios).pipe(delay(2000));
  }

  getLaboratorio(id: number) {
    return of(mockLaboratorios.find(laboratorio => laboratorio.id === id));
  }

  addLaboratorio(laboratorio: ILaboratorio) {
    mockLaboratorios.push(laboratorio);
    return of(laboratorio).pipe(delay(2000));
  }

  editLaboratorio(laboratorio: ILaboratorio) {
    const index = mockLaboratorios.findIndex(lab => lab.id === laboratorio.id);
    mockLaboratorios[index] = laboratorio;
    return of(laboratorio).pipe(delay(2000));
  }

  deleteLaboratorio(id: number) {
    const index = mockLaboratorios.findIndex(lab => lab.id === id);
    mockLaboratorios.splice(index, 1);
    return of(id).pipe(delay(2000));
  }

}
