import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-recovery-account',
  templateUrl: './sign-recovery-account.component.html',
  styleUrls: ['./sign-recovery-account.component.scss']
})
export class SignRecoveryAccountComponent {
  /** flag para indicar que se envió la recuperación */
  recuperacionEnviada = false;
  /** contructor de la clase */
  constructor(private router: Router){}
/**
   * confirmar la recuperación
   */
recovery(){
  this.recuperacionEnviada = true;
}
/**
 * regresa al home
 */
backToHome(){
  this.router.navigate(['/home']);
}


/**
 * funcion para validar el email
 * @param email a validar
 * @param form que contiene los inputs
 * @returns 
 */
validateEmail(email: string, form: NgForm) {
  if(!form) return;
  // Define la expresión regular para validar el correo electrónico
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  // Realiza la validación
  const emailInvalid = !emailRegex.test(email);
  
  form.form.get('email')!.setErrors(emailInvalid ? { emailInvalid: true } : null);
}
}
