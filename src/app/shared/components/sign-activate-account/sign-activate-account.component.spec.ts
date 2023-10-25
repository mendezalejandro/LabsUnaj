import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignActivateAccountComponent } from './sign-activate-account.component';

describe('SignActivateAccountComponent', () => {
  let component: SignActivateAccountComponent;
  let fixture: ComponentFixture<SignActivateAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
