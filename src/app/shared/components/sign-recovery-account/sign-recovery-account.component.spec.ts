import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignRecoveryAccountComponent } from './sign-recovery-account.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { TestModule } from 'src/app/core/modules/test.module';

describe('SignRecoveryAccountComponent', () => {
  let component: SignRecoveryAccountComponent;
  let fixture: ComponentFixture<SignRecoveryAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[ HttpClientTestingModule, MaterialModule, TestModule, TranslateModule.forRoot(), FormsModule ],
      declarations: [SignRecoveryAccountComponent]
    });
    fixture = TestBed.createComponent(SignRecoveryAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
