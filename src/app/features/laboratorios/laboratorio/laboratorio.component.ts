import { Component } from '@angular/core';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.scss']
})
export class LaboratorioComponent {

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement?.files?.[0]; // Obtiene el primer archivo seleccionado (si hay alguno)

    if (file) {
      // Realiza cualquier acción que necesites con el archivo seleccionado,
      // como mostrar su nombre o enviarlo a través de una solicitud HTTP.
      console.log('Archivo seleccionado:', file.name);
    }
  }
}
