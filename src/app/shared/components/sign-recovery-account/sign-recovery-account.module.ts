import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { SignRecoveryAccountRoutingModule } from './sign-in-routing.module';



@NgModule({
  declarations: [],
  imports: [
    SignRecoveryAccountRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    TranslateModule.forChild(),
  ]
})
export class SignRecoveryAccountModule { }
