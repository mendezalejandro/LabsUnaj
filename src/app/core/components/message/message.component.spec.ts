import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { TranslateModule } from '@ngx-translate/core';
import { BaseModule } from '../../modules/base.module';
import { MaterialModule } from '../../modules/material.module';
import { TestModule } from '../../modules/test.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TranslateModule.forRoot(), BaseModule, MaterialModule, TestModule],
      declarations: [ MessageComponent ],
      providers: [
        { provide: MatDialogRef, useValue: MessageComponent },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { mensaje: 'Hola desde la prueba' }, // Proporciona los datos que necesitas para tu prueba
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
