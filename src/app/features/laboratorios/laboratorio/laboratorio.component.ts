import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ILaboratorio } from 'src/app/shared/models/laboratorio.model';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.scss']
})
export class LaboratorioComponent {
  @ViewChild('form') form!: NgForm;
  /* laboratorio a mostrar */
  @Input() laboratorio!: ILaboratorio;
  /* evento para notificar cambios */
  @Output() laboratorioChange: EventEmitter<ILaboratorio> = new EventEmitter<ILaboratorio>();
  /* indicador de solo lectura */
  @Input() readOnly: boolean = false;
  /* indicador de deshabilitado */
  @Input() disabled: boolean = false;
  


  /**
   * procesa el archivo seleccionado
   * @param event evento de seleccion de archivo
   */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files.length > 0) {
      const file = input.files[0];
      this.previewImage(file);
    }
  }

  /**
   * muestra la imagen seleccionada
   * @param file archivo seleccionado
   */
  previewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.laboratorio.imagen = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  /** obtiene el estado del formulario (se utiliza en el parent) */
  get formValid() {
      return !this.form ? false : this.form.valid;
  }
}
