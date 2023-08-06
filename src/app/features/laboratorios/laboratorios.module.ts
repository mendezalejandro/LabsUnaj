import { NgModule } from '@angular/core';
import { LaboratoriosComponent } from './laboratorios.component';
import { LaboratoriosRoutingModule } from './laboratorios-routing.module';
import { BaseModule } from 'src/app/core/modules/base.module';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { FormsModule } from '@angular/forms';
import { UILibraryModule } from 'src/app/core/modules/ui-library.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


@NgModule({
  declarations: [LaboratoriosComponent, LaboratorioComponent],
  imports: [
    BaseModule,
    FormsModule,
    UILibraryModule,
    LaboratoriosRoutingModule
  ],
  // providers: [
  //   { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' } }
  // ]
})
export class LaboratoriosModule { }
