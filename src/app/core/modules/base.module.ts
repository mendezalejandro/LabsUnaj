import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material.module';
import { BusyComponent } from '../components/busy/busy.component';
import { MessageComponent } from '../components/message/message.component';


const components = [
  BusyComponent,
  MessageComponent
];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule
  ],
  exports: [CommonModule, TranslateModule, MaterialModule, ...components]
})
export class BaseModule { }
