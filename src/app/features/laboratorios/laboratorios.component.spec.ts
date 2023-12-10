import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoriosComponent } from './laboratorios.component';
import { TestModule } from 'src/app/core/modules/test.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/core/modules/material.module';

describe('LaboratoriosComponent', () => {
  let component: LaboratoriosComponent;
  let fixture: ComponentFixture<LaboratoriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TestModule, TranslateModule.forRoot(), MaterialModule ],
      declarations: [LaboratoriosComponent]
    });
    fixture = TestBed.createComponent(LaboratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
