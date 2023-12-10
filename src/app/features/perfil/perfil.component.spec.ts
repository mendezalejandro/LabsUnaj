import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComponent } from './perfil.component';
import { TestModule } from 'src/app/core/modules/test.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { TranslateModule } from '@ngx-translate/core';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule, MaterialModule, TranslateModule.forRoot()],
      declarations: [PerfilComponent]
    });
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
