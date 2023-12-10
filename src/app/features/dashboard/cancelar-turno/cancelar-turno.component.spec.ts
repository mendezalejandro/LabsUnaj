import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarTurnoComponent } from './cancelar-turno.component';
import { TestModule } from 'src/app/core/modules/test.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

describe('CancelarTurnoComponent', () => {
  let component: CancelarTurnoComponent;
  let fixture: ComponentFixture<CancelarTurnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule, MaterialModule, MatDialogModule, TranslateModule.forRoot()],
      declarations: [CancelarTurnoComponent],
      providers: [
        { provide: MatDialogRef, useValue: CancelarTurnoComponent },
      ],
    });
    fixture = TestBed.createComponent(CancelarTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
