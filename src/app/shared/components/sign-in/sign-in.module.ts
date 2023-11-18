import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/core/modules/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { CustomDirectivesModule } from '../../directives/custom-directives.module';


@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    SignInRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    CustomDirectivesModule,
    TranslateModule.forChild(),
  ]
})
export class SignInModule { }
