import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignRecoveryAccountComponent } from './sign-recovery-account.component';

describe('SignRecoveryAccountComponent', () => {
  let component: SignRecoveryAccountComponent;
  let fixture: ComponentFixture<SignRecoveryAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
