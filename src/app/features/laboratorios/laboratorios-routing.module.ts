import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaboratoriosComponent } from './laboratorios.component';

const routes: Routes = [{ path: '', component: LaboratoriosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoriosRoutingModule { }
