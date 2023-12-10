import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignChangePasswordComponent } from './sign-change-password.component';
import { TestModule } from 'src/app/core/modules/test.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('SignChangePasswordComponent', () => {
  let component: SignChangePasswordComponent;
  let fixture: ComponentFixture<SignChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TestModule, TranslateModule.forRoot(), MaterialModule, FormsModule, RouterModule ],
      declarations: [SignChangePasswordComponent]
    });
    fixture = TestBed.createComponent(SignChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
