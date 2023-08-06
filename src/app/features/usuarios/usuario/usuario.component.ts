import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUsuario } from 'src/app/shared/models/usuario.model';

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
}
