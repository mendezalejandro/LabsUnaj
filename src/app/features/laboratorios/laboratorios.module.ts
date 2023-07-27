import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaboratoriosComponent } from './laboratorios.component';
import { LaboratoriosRoutingModule } from './laboratorios-routing.module';



@NgModule({
  declarations: [LaboratoriosComponent],
  imports: [
    CommonModule,
    LaboratoriosRoutingModule
  ]
})
export class LaboratoriosModule { }
