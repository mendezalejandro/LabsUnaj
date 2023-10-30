import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ILaboratorio } from 'src/app/shared/models/laboratorio.model';
import { ITurnoBusqueda, TurnoBusqueda } from 'src/app/shared/models/turno.model';
import { IUsuario } from 'src/app/shared/models/usuario.model';
import { LaboratorioService } from 'src/app/shared/services/laboratorio.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-turnos-busqueda-avanzada',
  templateUrl: './turnos-busqueda-avanzada.component.html',
  styleUrls: ['./turnos-busqueda-avanzada.component.scss']
})
export class TurnosBusquedaAvanzadaComponent {
  /* observable para traer los laboratorios */
  $laboratorios: Observable<ILaboratorio[]> = this.laboratorioService.getLaboratorios();
  /* observable para traer los alumnos */
  $alumnos: Observable<IUsuario[]> = this.usuarioService.getAlumnos();
  /* fecha actual */
  fechaActual : Date = new Date();
  /* fecha siguiente */
  fechaSiguiente = new Date(this.fechaActual.setDate(this.fechaActual.getDate() + 1));
  /* parametros de busqueda */
  parametros = new TurnoBusqueda();
  /**
   * constructor
   * @param laboratorioService inyectado para el servicio de laboratorios
   * @param usuarioService inyectado para el servicio de usuarios
   * @param dialogRef inyectado para el dialogo
   */
  constructor(
    private laboratorioService: LaboratorioService, 
    private usuarioService: UsuarioService,
    private dialogRef: MatDialogRef<TurnosBusquedaAvanzadaComponent>) {

  }
  /**
   * funcion para mostrar el nombre del laboratorio
   * @param laboratorio a mostrar
   * @returns nombre del laboratorio
   */
  displayLaboratorioFn(laboratorio: ILaboratorio): string {
    return laboratorio?.nombre ? laboratorio.nombre : '';
  }
  /**
   * funcion para mostrar el nombre del alumno
   * @param alumno a mostrar
   * @returns nombre del alumno
   */
  displayAlumnoFn(alumno: IUsuario): string {
    return alumno?.nombre ? alumno.nombre + " " + alumno.apellido : '';
  }

  /**
   * funcion para buscar
   */
  buscar() {
    this.dialogRef.close(this.parametros);
  }

  /**
   * funcion para cerrar el dialogo
   */
  cerrar() {
    this.dialogRef.close(false);
  }
}
