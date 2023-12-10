import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import pt from '@angular/common/locales/pt';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MatRippleModule } from '@angular/material/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { environment } from 'src/app/environments/environment';
import { BaseModule } from './base.module';
import { MaterialModule } from './material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

registerLocaleData(es);
registerLocaleData(pt);
const locale = environment.defaultLocale;


const modules = [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientTestingModule,
    BaseModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot()
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: LOCALE_ID, useValue: 'en' },
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000}},
    {provide: MAT_DATE_LOCALE, useValue: locale}
  ],
})
export class TestModule {}
