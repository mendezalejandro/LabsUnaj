import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphaNumericDirective } from './alpha-numeric.directive';
import { AlphabeticDirective } from './alphabetic.directive';

const directives = [
  AlphaNumericDirective,
  AlphabeticDirective
];
@NgModule({
  declarations: [...directives],
  imports: [
    CommonModule,
  ],
  exports: [...directives]
})
export class CustomDirectivesModule { }
