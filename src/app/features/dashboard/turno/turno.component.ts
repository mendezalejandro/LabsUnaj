import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Observable, map, tap } from 'rxjs';
import { ILaboratorio } from 'src/app/shared/models/laboratorio.model';
import { IDisponibilidad } from 'src/app/shared/models/turno.model';
import { LaboratorioService } from 'src/app/shared/services/laboratorio.service';
import { TurnoService } from 'src/app/shared/services/turno.service';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.scss']
})
export class TurnoComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;
  $laboratorios = this.laboratorioService.getLaboratorios();
  $horarios!: Observable<IDisponibilidad[]>;
  stepperOrientation: Observable<StepperOrientation>;
  selectedIndex: number=0;

  laboratorio!: ILaboratorio;
  fecha: Date = new Date();
  horario!: IDisponibilidad;
  constructor(
    private _formBuilder: FormBuilder, 
    breakpointObserver: BreakpointObserver, 
    private laboratorioService: LaboratorioService,
    private turnoService: TurnoService
    ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  ngOnInit(): void {
  }

  laboratorioSelected(laboratorio: ILaboratorio){
    this.laboratorio = laboratorio;
    this.$horarios = this.turnoService.getHorariosDispoinibles(laboratorio.id, this.fecha.toISOString().split('T')[0])
    .pipe(tap((horarios) => {
      console.log(horarios);
      this.stepper?.next();
    }));
  }
  fechaSelected(date: Date){
    this.fecha = date;
    this.$horarios = this.turnoService.getHorariosDispoinibles(this.laboratorio.id, this.fecha.toISOString().split('T')[0])
  }
  horarioSelected(horario: IDisponibilidad){
    this.horario = horario;
    // this.$horarios = this.turnoService.getHorariosDispoinibles(this.laboratorio.id, this.fecha.toISOString().split('T')[0])
  }
}