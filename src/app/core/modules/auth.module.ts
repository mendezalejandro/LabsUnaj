import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideIfRoleDirective } from '../auth/auth.directive';


const directives = [
  HideIfRoleDirective
];
@NgModule({
  declarations: [...directives],
  imports: [
    CommonModule,
  ],
  exports: [...directives]
})
export class AuthModule { }
