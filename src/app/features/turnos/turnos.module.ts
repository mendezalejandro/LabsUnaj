import { NgModule } from '@angular/core';
import { TurnosComponent } from './turnos.component';
import { TurnosRoutingModule } from './turnos-routing.module';
import { FormsModule } from '@angular/forms';
import { BaseModule } from 'src/app/core/modules/base.module';
import { UILibraryModule } from 'src/app/core/modules/ui-library.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginator } from 'src/app/core/models/paginator.model';
import { TurnosBusquedaAvanzadaComponent } from './turnos-busqueda-avanzada/turnos-busqueda-avanzada.component';


@NgModule({
  declarations: [TurnosComponent, TurnosBusquedaAvanzadaComponent],
  imports: [
    BaseModule,
    FormsModule,
    UILibraryModule,
    TurnosRoutingModule
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginator,
    },
  ],
})
export class TurnosModule { }
