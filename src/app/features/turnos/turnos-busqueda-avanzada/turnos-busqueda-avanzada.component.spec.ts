import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosBusquedaAvanzadaComponent } from './turnos-busqueda-avanzada.component';
import { TestModule } from 'src/app/core/modules/test.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

describe('TurnosBusquedaAvanzadaComponent', () => {
  let component: TurnosBusquedaAvanzadaComponent;
  let fixture: ComponentFixture<TurnosBusquedaAvanzadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TestModule, TranslateModule.forRoot(), MaterialModule, FormsModule ],
      declarations: [TurnosBusquedaAvanzadaComponent],
      providers: [
        { provide: MatDialogRef, useValue: TurnosBusquedaAvanzadaComponent },
      ]
    });
    fixture = TestBed.createComponent(TurnosBusquedaAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
