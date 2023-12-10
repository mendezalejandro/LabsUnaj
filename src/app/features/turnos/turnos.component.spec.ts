import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosComponent } from './turnos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { TestModule } from 'src/app/core/modules/test.module';
import { TranslateModule } from '@ngx-translate/core';
import { TurnosBusquedaAvanzadaComponent } from './turnos-busqueda-avanzada/turnos-busqueda-avanzada.component';
import { FormsModule } from '@angular/forms';

describe('TurnosComponent', () => {
  let component: TurnosComponent;
  let fixture: ComponentFixture<TurnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule, TestModule, TranslateModule.forRoot(), FormsModule],
      declarations: [TurnosComponent, TurnosBusquedaAvanzadaComponent]
    });
    fixture = TestBed.createComponent(TurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
