import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-sign-activate-account',
  templateUrl: './sign-activate-account.component.html',
  styleUrls: ['./sign-activate-account.component.scss']
})
export class SignActivateAccountComponent implements OnInit {
  // Observable para la operación de activación de cuenta
  $operation!: Observable<any>;
  /**
   * constructor del componente SignActivateAccountComponent
   * @param router instancia de Router
   * @param route instancia de ActivatedRoute
   * @param usuarioService instancia de UsuarioService
   */
  constructor(private router: Router, private route: ActivatedRoute, private usuarioService: UsuarioService) { }

  /**
   * inicializa el componente
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.$operation = this.usuarioService.activarUsuario(parseInt(id))
      }
    });
  }

  /**
   * regresa al login
   */
  toLogin() {
    this.router.navigate(['/sign-in']);
  }
}
