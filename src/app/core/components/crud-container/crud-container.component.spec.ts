import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudContainerComponent } from './crud-container.component';

describe('CrudContainerComponent', () => {
  let component: CrudContainerComponent;
  let fixture: ComponentFixture<CrudContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudContainerComponent]
    });
    fixture = TestBed.createComponent(CrudContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
