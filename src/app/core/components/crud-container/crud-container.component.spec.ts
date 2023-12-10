import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudContainerComponent } from './crud-container.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../modules/material.module';
import { TestModule } from '../../modules/test.module';

describe('CrudContainerComponent', () => {
  let component: CrudContainerComponent;
  let fixture: ComponentFixture<CrudContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TestModule, TranslateModule.forRoot(), MaterialModule ],
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
