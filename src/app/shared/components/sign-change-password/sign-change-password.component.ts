import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-sign-change-password',
  templateUrl: './sign-change-password.component.html',
  styleUrls: ['./sign-change-password.component.scss']
})
export class SignChangePasswordComponent implements OnInit {
  /* flag que indica que si se termino la registración */
  cambioContrasenaEnviado: boolean = false;
  /* Observable para la operación de cambio de contrasela */
  $operacion!: Observable<any>;
  /* id del usuario */
  usuarioID!: number;
  /**
   * constructor de la clase
   * @param router instnacia
   * @param breakpointObserver instancia
   */
  constructor(private router: Router, private route: ActivatedRoute, private usuarioService: UsuarioService) {
  }

  /**
* inicializa el componente
*/
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.usuarioID = parseInt(id);
      }
    });
  }
  /**
   * confirmar el cambio de contraseña
   */
  cambiarContrasena(form: NgForm) {
    console.log(form.controls['password'].value)
    this.$operacion = this.usuarioService.actualizarContrasena(this.usuarioID,form.controls['password'].value).pipe(
      tap((response) => {
        this.cambioContrasenaEnviado = true;
      })
    )
  }
  /**
   * regresa al login
   */
  toLogin() {
    this.router.navigate(['/sign-in']);
  }

  /**
   * valida que las contraseñas sean iguales
   * @param sesionForm formulario que contiene los inputs
   * @returns 
   */
  validatePasswords(form: NgForm) {
    if (!form) return;
    form.form.get('confirmPassword')!.setErrors(form.controls['password'].value !== form.controls['confirmPassword'].value ? { notMatching: true } : null);
  }
}
