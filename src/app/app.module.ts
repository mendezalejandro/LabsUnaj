import { registerLocaleData } from '@angular/common';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es';
import pt from '@angular/common/locales/pt';
import { Provider, NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModule } from './core/modules/base.module';
import { MaterialModule } from './core/modules/material.module';
import { BusyInterceptorService } from './core/services/interceptors/busy-interceptor.service';
import { ErrorInterceptorService } from './core/services/interceptors/error-interceptor.service';
import { environment } from './environments/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(es);
registerLocaleData(pt);
const lang = environment.defaultLang;
const locale = environment.defaultLocale;

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export const interceptors: Provider[]=  [
  // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: BusyInterceptorService, multi: true},
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BaseModule,
    TranslateModule.forRoot({
      defaultLanguage: lang,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    })
  ],
  providers: [
    // AuthService,
    ...interceptors,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: LOCALE_ID, useValue: 'en' },
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000}},
    {provide: MAT_DATE_LOCALE, useValue: locale}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
