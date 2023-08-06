import { NgModule } from '@angular/core';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { UILibraryModule } from 'src/app/core/modules/ui-library.module';
import { BaseModule } from 'src/app/core/modules/base.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UsuariosComponent, UsuarioComponent],
  imports: [
    BaseModule,
    FormsModule,
    UILibraryModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
