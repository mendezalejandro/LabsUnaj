import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignActivateAccountComponent } from './sign-activate-account.component';
import { TestModule } from 'src/app/core/modules/test.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

describe('SignActivateAccountComponent', () => {
  let component: SignActivateAccountComponent;
  let fixture: ComponentFixture<SignActivateAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule, MaterialModule, TranslateModule.forRoot(), RouterModule],
      declarations: [SignActivateAccountComponent]
    });
    fixture = TestBed.createComponent(SignActivateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
