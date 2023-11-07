import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, tap } from 'rxjs';
import { IUsuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  /* usuario a mostrar */
  @Input() usuario!: IUsuario;
  /* evento para notificar cambios */
  @Output() usuarioChange: EventEmitter<IUsuario> = new EventEmitter<IUsuario>();
  /* indicador de solo lectura */
  @Input() readOnly: boolean = false;
  /* indicador de deshabilitado */
  @Input() disabled: boolean = false;
  /* indicador de operacion */
  @Input() oper: 'edit' | 'add' | 'delete' | 'view' = 'view';

  $operacion!: Observable<any>;

  constructor(private usuarioService: UsuarioService, private translateService: TranslateService){}

  /**
   * envia un email de recuperación
   * @param email de recuperación
   */
  enviarMailRecuperacion(email: string) {
    if(confirm(this.translateService.instant("features.usuarios.enviar-email")))
    {
      this.$operacion = this.usuarioService.enviarEmailRecuperacion(email).pipe(
        tap(_=>{
          alert(this.translateService.instant("features.usuarios.enviar-email-confirmacion"))
        })
      );
    }
  }

}
