import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-change-password',
  templateUrl: './sign-change-password.component.html',
  styleUrls: ['./sign-change-password.component.scss']
})
export class SignChangePasswordComponent {
    /* flag que indica que si se termino la registración */
    cambioContrasenaEnviado: boolean = false;
    /**
     * constructor de la clase
     * @param router instnacia
     * @param breakpointObserver instancia
     */
    constructor(private router: Router) {
    }
    /**
     * confirmar el cambio de contraseña
     */
    cambiarContrasena(){
      this.cambioContrasenaEnviado = true;
    }
    /**
     * regresa al login
     */
    toLogin(){
      this.router.navigate(['/sign-in']);
    }
  
    /**
     * valida que las contraseñas sean iguales
     * @param sesionForm formulario que contiene los inputs
     * @returns 
     */
    validatePasswords(form: NgForm) {
      if(!form) return;
      form.form.get('confirmPassword')!.setErrors(form.controls['password'].value !== form.controls['confirmPassword'].value ? { notMatching: true } : null);
    }
  }
  