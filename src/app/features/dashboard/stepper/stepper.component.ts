import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: StepperComponent}]
})
export class StepperComponent extends CdkStepper  {
  /** evento que se emite cuando se confirma el paso */
  @Output () public onConfirm: EventEmitter<boolean> = new EventEmitter();
  /**
   * metodo que selecciona el paso por indice
   * @param index indice del paso
   * @param step paso
   */
  selectStepByIndex(index: number, step:any): void {
    this.selectedIndex = index;
  }

  /**
   * metodo que indica si el paso es el ultimo
   * @param index indice del paso
   * @param step paso
   * @returns true si es el ultimo paso, false en caso contrario
   */
  isLastStep(index: number, step:CdkStep) {
    return step.state === 'done';
  }
  confirmar() {
    this.onConfirm.emit(true);
  }
}
