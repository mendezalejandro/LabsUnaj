import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { CustomDirectivesModule } from '../../directives/custom-directives.module';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    SignUpRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    CustomDirectivesModule,
    TranslateModule.forChild(),
  ]
})
export class SignUpModule { }
