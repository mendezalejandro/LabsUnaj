import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { SignActivateAccountComponent } from './sign-activate-account.component';
import { SignActivateAccountRoutingModule } from './sign-activate-account-routing.module';


@NgModule({
  declarations: [
    SignActivateAccountComponent,
  ],
  imports: [
    SignActivateAccountRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    TranslateModule.forChild(),
  ]
})
export class SignActivateAccountModule { }
