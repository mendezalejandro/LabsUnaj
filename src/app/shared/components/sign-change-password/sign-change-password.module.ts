import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignChangePasswordRoutingModule } from './sign-change-password-routing.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/core/modules/material.module';



@NgModule({
  declarations: [],
  imports: [
    SignChangePasswordRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    TranslateModule.forChild(),
  ]
})
export class SignChangePasswordModule { }
