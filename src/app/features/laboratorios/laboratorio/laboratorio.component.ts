import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Operation } from 'src/app/core/models/general.model';
import { ILaboratorio } from 'src/app/shared/models/laboratorio.model';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.scss']
})
export class LaboratorioComponent implements AfterViewInit {
  @ViewChild('generalForm') generalForm!: NgForm;
  @ViewChild('configuracionForm') configuracionForm!: NgForm;
  /* laboratorio a mostrar */
  @Input() laboratorio!: ILaboratorio;
  /* evento para notificar cambios */
  @Output() laboratorioChange: EventEmitter<ILaboratorio> = new EventEmitter<ILaboratorio>();
  /* indicador de solo lectura */
  @Input() readOnly: boolean = false;
  /* indicador de deshabilitado */
  @Input() disabled: boolean = false;
  /* indicador de dias */
  dias:string[]= [];

  /**
   * despues de inicializar la vista carga la lista de dias
   */
  ngAfterViewInit(): void {
    this.loadDays();
  }

  /**
   * carga la lista de dias
   */
  loadDays() {
    if (this.laboratorio.configuracion.dias.lunes) this.dias.push('lunes');
    if (this.laboratorio.configuracion.dias.martes) this.dias.push('martes');
    if (this.laboratorio.configuracion.dias.miercoles) this.dias.push('miercoles');
    if (this.laboratorio.configuracion.dias.jueves) this.dias.push('jueves');
    if (this.laboratorio.configuracion.dias.viernes) this.dias.push('viernes');
    if (this.laboratorio.configuracion.dias.sabado) this.dias.push('sabado');
    if (this.laboratorio.configuracion.dias.domingo) this.dias.push('domingo');
  }
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
    return (!this.generalForm || !this.configuracionForm) ? false : (this.generalForm.valid && this.configuracionForm.valid);
  }

  /**
   * evento de cambio de dias
   * @param dias dias seleccionados
   */
  onchange(dias: string[]){
    this.laboratorio.configuracion.dias.lunes = dias.includes('lunes');
    this.laboratorio.configuracion.dias.martes = dias.includes('martes');
    this.laboratorio.configuracion.dias.miercoles = dias.includes('miercoles');
    this.laboratorio.configuracion.dias.jueves = dias.includes('jueves');
    this.laboratorio.configuracion.dias.viernes = dias.includes('viernes');
    this.laboratorio.configuracion.dias.sabado = dias.includes('sabado');
    this.laboratorio.configuracion.dias.domingo = dias.includes('domingo');
  }
}
