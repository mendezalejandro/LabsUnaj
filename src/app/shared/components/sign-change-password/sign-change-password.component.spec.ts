import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignChangePasswordComponent } from './sign-change-password.component';

describe('SignChangePasswordComponent', () => {
  let component: SignChangePasswordComponent;
  let fixture: ComponentFixture<SignChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
