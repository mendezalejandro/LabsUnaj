import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[chequearTurno]'
})
export class HabilitarTurnoDirective implements OnInit, OnDestroy{
  @Input('chequearTurno') fechaTurno!: Date; // Suponiendo que se pasa la fecha del turno como entrada

  private intervalId: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.updateVisibility();
    this.intervalId = setInterval(() => {
      this.updateVisibility();
    }, 1000); // Actualizar cada segundo
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private updateVisibility() {
    const fechaActual = new Date();
    if (new Date(this.fechaTurno) <= fechaActual) {
      this.el.nativeElement.style.display = 'inline';
    } else {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
