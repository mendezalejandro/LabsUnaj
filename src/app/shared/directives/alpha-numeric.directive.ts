import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[alphaNumeric]'
})
export class AlphaNumericDirective {
  @HostListener('input', ['$event']) onInput(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    const regex = /^[a-zA-Z0-9]*$/;
    const isValid = regex.test(input.value);

    if (!isValid) {
      input.value = input.value.replace(/[^a-zA-Z0-9]/g, '');
    }
  }
}
