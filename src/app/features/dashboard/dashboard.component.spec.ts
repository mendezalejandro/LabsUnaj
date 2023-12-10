import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { TestModule } from 'src/app/core/modules/test.module';
import { CrudContainerComponent } from 'src/app/core/components/crud-container/crud-container.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { RolTypes } from 'src/app/shared/models/roles.model';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let usuarioServiceMock: jasmine.SpyObj<UsuarioService>;

  beforeEach(() => {
    usuarioServiceMock = jasmine.createSpyObj('UsuarioService', ['getUsuarioLogueado']);
    usuarioServiceMock.getUsuarioLogueado.and.returnValue(
      {
        id: 1,
        nombreUsuario: 'admin',
        nombre: 'admin',
        apellido: 'admin',
        estado: true,
        rol: RolTypes.Administrador,
        vencimiento: new Date(),
        tokenSesion: 'SUPERTOKEN'
      }
    );
    TestBed.configureTestingModule({
      imports: [ TestModule, TranslateModule.forRoot(), MaterialModule ],
      declarations: [DashboardComponent, CrudContainerComponent],
      providers: [
        { provide: UsuarioService, useValue: usuarioServiceMock }
      ],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
