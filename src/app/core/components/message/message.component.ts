import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageActions, MessageTypes } from '../../models/general.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  /* Tipos de mensajes: Info, Error, Warning, Success */
  type: MessageTypes = MessageTypes.Info;
  /* Titulo del mensaje */
  title!: string;
  /* Mensaje */
  message!: string;
  /* Mostrar boton de cerrar */
  showClose: boolean = false;
  /* Mostrar boton de confirmar */
  showConfirm: boolean = true;
  /* Mostrar boton de cancelar */
  showCancel: boolean = true;
  /**
   * constructor
   * @param data datos del mensaje 
   * @param dialogRef referencia al dialogo
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MessageComponent>,
  ) { }

  /* inicializacion */
  ngOnInit(): void {
    if (this.data?.type) this.type = this.data.type;
    this.title = this.data.title;
    this.message = this.data.message;
  }

  /* cerrar el dialogo */
  closeDialog(data: any) {
    this.dialogRef.close(data);
  }

  /* confirmar */
  confirm() {
    this.closeDialog({ oper: MessageActions.Confirm });
  }
  /* cancelar */
  cancel() {
    this.closeDialog({ oper: MessageActions.Cancel });
  }
  /* cerrar */
  close() {
    this.closeDialog({ oper: MessageActions.Close });
  }
}
