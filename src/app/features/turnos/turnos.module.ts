import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnosComponent } from './turnos.component';
import { TurnosRoutingModule } from './turnos-routing.module';



@NgModule({
  declarations: [TurnosComponent],
  imports: [
    CommonModule,
    TurnosRoutingModule
  ]
})
export class TurnosModule { }
