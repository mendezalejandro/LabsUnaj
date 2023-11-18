import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[newTypePassword]'
})
export class NewTypePasswordDirective {

  private isPasswordVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.togglePasswordVisibility();
  }

  private togglePasswordVisibility() {
    const inputElement = this.el.nativeElement.previousElementSibling;

    if (inputElement.type === 'password') {
      inputElement.type = 'text';
    } else {
      inputElement.type = 'password';
    }

    this.isPasswordVisible = !this.isPasswordVisible;
  }

}
