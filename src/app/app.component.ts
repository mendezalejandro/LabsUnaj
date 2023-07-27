import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { PerfilService } from './core/services/profile.services';
import { LanguageService } from './core/services/language.service';
import { ThemesService } from './core/services/themes.service';
import { DOCUMENT } from '@angular/common';
import { Observable, merge, delay, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  userIsLogged = true;
  title = 'UNAJ Labs';
  /** Selected language */
  language!: string;
  isDarkTheme = false; // Puedes ajustar esta variable según tus necesidades para alternar entre el tema light y dark
  /** Main observable ta listen for changes */
  mainHandler$!: Observable<any>;
  constructor(
    private lenguajeService: LanguageService,
    private temaService: ThemesService,
    private perfilService: PerfilService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    ) {

  }
  ngOnInit(): void {
    this.mainHandler$ = merge(
      /** Language service handler */
      this.lenguajeService.language.pipe(delay(0), tap((lang) => this.language = lang)),
      /** Theme service handler */
      this.temaService.themehandler.pipe(delay(0),
        tap((theme: string) => {
          //console.log(theme);
          this.renderer.setAttribute(this.document?.body, 'class', 'mat-typography mat-app-background ' + theme + '-theme');
        })
      ),
    );
    this.perfilService.load();
  }
  /** afterInit hook */
  ngAfterViewInit(): void {
    this.perfilService.load();
  }
  openLogout(){}
  openLogin(){}
}
