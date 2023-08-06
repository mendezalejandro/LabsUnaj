import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudContainerComponent } from '../components/crud-container/crud-container.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [CrudContainerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CrudContainerComponent
  ]
})
export class UILibraryModule { }
