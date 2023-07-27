import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PerfilRoutingModule,
    TranslateModule
  ]
})
export class PerfilModule { }
