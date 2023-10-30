import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosBusquedaAvanzadaComponent } from './turnos-busqueda-avanzada.component';

describe('TurnosBusquedaAvanzadaComponent', () => {
  let component: TurnosBusquedaAvanzadaComponent;
  let fixture: ComponentFixture<TurnosBusquedaAvanzadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnosBusquedaAvanzadaComponent]
    });
    fixture = TestBed.createComponent(TurnosBusquedaAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
