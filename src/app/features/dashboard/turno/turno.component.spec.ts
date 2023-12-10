import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoComponent } from './turno.component';
import { TestModule } from 'src/app/core/modules/test.module';
import { StepperComponent } from '../stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TurnoComponent', () => {
  let component: TurnoComponent;
  let fixture: ComponentFixture<TurnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule, CdkStepperModule, TranslateModule.forRoot(), HttpClientTestingModule],
      declarations: [TurnoComponent, StepperComponent]
    });
    fixture = TestBed.createComponent(TurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
