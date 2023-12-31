import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DateTime } from 'luxon';
import { EMPTY, Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { ILaboratorio } from 'src/app/shared/models/laboratorio.model';
import { IDisponibilidad } from 'src/app/shared/models/turno.model';
import { IUsuarioSesion } from 'src/app/shared/models/usuario.model';
import { LaboratorioService } from 'src/app/shared/services/laboratorio.service';
import { TurnoService } from 'src/app/shared/services/turno.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.scss']
})
export class TurnoComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;
  /** evento que se emite cuando se confirma el paso */
  @Output() public onConfirmed: EventEmitter<boolean> = new EventEmitter();
  $laboratorios = this.laboratorioService.getLaboratorios(true);
  $horarios!: Observable<IDisponibilidad[]>;
  stepperOrientation: Observable<StepperOrientation>;
  selectedIndex: number = 0;

  laboratorio!: ILaboratorio;
  fecha: Date = new Date();
  horario!: IDisponibilidad;
  /* usuario logueado */
  usuarioLogueado: IUsuarioSesion = this.usuarioService.getUsuarioLogueado();

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private laboratorioService: LaboratorioService,
    private turnoService: TurnoService,
    private usuarioService: UsuarioService
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  ngOnInit(): void {
  }

  laboratorioSelected(laboratorio: ILaboratorio) {
    const fechaParsed = DateTime.fromJSDate(this.fecha).toISO({ includeOffset: false }) as string;
    this.laboratorio = laboratorio;
    this.$horarios = this.turnoService.getHorariosDisponibles(laboratorio.id, fechaParsed.split('T')[0])
      .pipe(
        switchMap((horarios) => {
          if (!this.dateFilter(this.fecha)) return of([]);
          else return of(horarios);
        }),
        tap((horarios) => {
          this.stepper?.next();
        }));
  }
  fechaSelected(date: Date) {
    this.fecha = date;
    this.actualizarHorarios();
  }
  actualizarHorarios() {
    const fechaParsed = DateTime.fromJSDate(this.fecha).toISO({ includeOffset: false }) as string;
    this.$horarios = this.turnoService.getHorariosDisponibles(this.laboratorio.id, fechaParsed.split('T')[0])
  }
  horarioSelected(horario: IDisponibilidad) {
    this.horario = horario;
  }
  confirmar($event: boolean) {
    const dateString = DateTime.fromISO(`${this.fecha.toISOString()}`).toISO({ includeOffset: false }) as string;
    this.turnoService.confirmarTurno(this.usuarioLogueado.id, this.laboratorio.id, dateString.split('T')[0], this.horario!.horario)
      .pipe(
        tap((turno) => {
          this.onConfirmed.emit(true);
        }),
        catchError((errorResponse) => {
          if (errorResponse?.error?.codigo === "TURNOS-ERR-002") {
            this.actualizarHorarios();
            this.stepper?.previous();
          }
          return [];
        })
      )
      .subscribe();
  }

  dateFilter = (date: Date | null): boolean => {
    const dayOfWeek = (date || new Date()).getDay(); // Obtiene el día de la semana (0 para domingo, 1 para lunes, etc.)
    const daysOfWeek = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const dayName = daysOfWeek[dayOfWeek].toLowerCase(); // Obtiene el nombre del día en minúsculas
    const dias = this.laboratorio.configuracion.dias as any
    return dias[dayName];
  }
}