import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/core/modules/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';


@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    SignInRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    TranslateModule.forChild(),
  ]
})
export class SignInModule { }
