import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BaseModule } from 'src/app/core/modules/base.module';
import { TurnoComponent } from './turno/turno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { CancelarTurnoComponent } from './cancelar-turno/cancelar-turno.component';
import { HabilitarTurnoDirective } from './habilitar-turno.directive';



@NgModule({
  declarations: [DashboardComponent, TurnoComponent, StepperComponent, CancelarTurnoComponent,HabilitarTurnoDirective],
  imports: [
    BaseModule,
    CommonModule,
    FormsModule,
    CdkStepperModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatRippleModule,
    MatChipsModule,
  ]
})
export class DashboardModule { }
