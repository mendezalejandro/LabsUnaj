import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[alphabetic]'
})
export class AlphabeticDirective {
  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    const regex = /^[a-zA-Z]*$/;
    const isValid = regex.test(input.value);

    if (!isValid) {
      input.value = input.value.replace(/[^a-zA-Z]/g, '');
    }
  }
}
