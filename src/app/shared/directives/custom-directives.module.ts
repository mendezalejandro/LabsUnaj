import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphaNumericDirective } from './alpha-numeric.directive';
import { AlphabeticDirective } from './alphabetic.directive';
import { NewTypePasswordDirective } from './new-type-password.directive';

const directives = [
  AlphaNumericDirective,
  AlphabeticDirective,
  NewTypePasswordDirective
];
@NgModule({
  declarations: [...directives],
  imports: [
    CommonModule,
  ],
  exports: [...directives]
})
export class CustomDirectivesModule { }
