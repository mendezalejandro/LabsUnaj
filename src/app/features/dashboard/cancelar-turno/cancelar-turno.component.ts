import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cancelar-turno',
  templateUrl: './cancelar-turno.component.html',
  styleUrls: ['./cancelar-turno.component.scss']
})
export class CancelarTurnoComponent {
  /**
   * constructor de CancelarTurnoComponent
   * @param dialogRef referencia al dialogo
   */
  constructor(public dialogRef: MatDialogRef<CancelarTurnoComponent>){}

  /**
   * metodo que cierra el dialogo
   */
  confirmar(){
    this.dialogRef.close(true);
  }
}
