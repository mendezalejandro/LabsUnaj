import { NgModule } from '@angular/core';
import { LaboratoriosComponent } from './laboratorios.component';
import { LaboratoriosRoutingModule } from './laboratorios-routing.module';
import { BaseModule } from 'src/app/core/modules/base.module';


@NgModule({
  declarations: [LaboratoriosComponent],
  imports: [
    BaseModule,
    LaboratoriosRoutingModule
  ]
})
export class LaboratoriosModule { }
