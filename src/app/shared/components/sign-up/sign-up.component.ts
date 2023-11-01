import { Component, OnDestroy } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Observable, Subscription, map, tap } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnDestroy {
  /* nueva registracion */
  registracion = new Usuario();
  /* flag que indica que si se termino la registración */
  registracionEnviada: boolean = false;
  /** flag que indica si el email es invalid */
  emailError: boolean = false;
  /** observable de la orientacion */
  stepperOrientation!: Observable<StepperOrientation>;
  /** suscripcion */
  suscripcion!: Subscription;
  /**
   * constructor de la clase
   * @param router instnacia
   * @param breakpointObserver instancia
   */
  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private usuarioService: UsuarioService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  ngOnDestroy(): void {
    if (this.suscripcion) this.suscripcion.unsubscribe();
  }
  /**
   * confirmar la registracion
   */
  signUp(stepper: MatStepper) {
    this.suscripcion = this.usuarioService.registrarUsuario(this.registracion).pipe(
      tap((response) => {
          this.registracion = response;
          this.registracionEnviada = true;
          stepper.next();
          console.log('Usuario registrado correctamente', response);
      })
    ).subscribe();
  }
  /**
   * regresa al home
   */
  backToHome() {
    this.router.navigate(['/home']);
  }

  /**
   * valida que las contraseñas sean iguales
   * @param sesionForm formulario que contiene los inputs
   * @returns 
   */
  validatePasswords(sesionForm: NgForm) {
    if (!sesionForm) return;
    sesionForm.form.get('confirmPassword')!.setErrors(sesionForm.controls['password'].value !== sesionForm.controls['confirmPassword'].value ? { notMatching: true } : null);
  }


  validateEmail(email: string, formDatos: NgForm) {
    if (!formDatos) return;
    // Define la expresión regular para validar el correo electrónico
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    // Realiza la validación
    const emailInvalid = !emailRegex.test(email);

    formDatos.form.get('email')!.setErrors(emailInvalid ? { emailInvalid: true } : null);
  }
}
