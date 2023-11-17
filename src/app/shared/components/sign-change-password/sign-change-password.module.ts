import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignChangePasswordRoutingModule } from './sign-change-password-routing.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { SignChangePasswordComponent } from './sign-change-password.component';
import { CustomDirectivesModule } from '../../directives/custom-directives.module';



@NgModule({
  declarations: [SignChangePasswordComponent],
  imports: [
    SignChangePasswordRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    CustomDirectivesModule,
    TranslateModule.forChild(),
  ]
})
export class SignChangePasswordModule { }
