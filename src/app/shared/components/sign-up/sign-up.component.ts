import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { RolTypes } from '../../models/roles.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  /* nueva registracion */
  registracion= new Usuario();
  /* flag que indica que si se termino la registración */
  registracionEnviada: boolean = false;

  /**
   * constructor de la clase
   * @param router instnacia
   */
  constructor(private router: Router){}
  
  /**
   * confirmar la registracion
   */
  signUp(){
    this.registracion.rol = RolTypes.Alumno;
    this.registracion.estado = true;
    this.registracionEnviada = true;
  }
  /**
   * regresa al home
   */
  backToHome(){
    this.router.navigate(['/home']);
  }
}
