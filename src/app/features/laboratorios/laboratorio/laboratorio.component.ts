import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILaboratorio } from 'src/app/shared/models/laboratorio.model';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.scss']
})
export class LaboratorioComponent {
  @Input() laboratorio!: ILaboratorio;
  @Output() laboratorioChange: EventEmitter<ILaboratorio> = new EventEmitter<ILaboratorio>();
  @Input() readOnly: boolean = false;
  constructor() { }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files.length > 0) {
      const file = input.files[0];
      this.previewImage(file);
    }
  }

  previewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.laboratorio.imagen = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
