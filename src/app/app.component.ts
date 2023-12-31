import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { PerfilService } from './core/services/profile.services';
import { LanguageService } from './core/services/language.service';
import { ThemesService } from './core/services/themes.service';
import { DOCUMENT } from '@angular/common';
import { Observable, merge, delay, tap, map } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { SignOutComponent } from './shared/components/sign-out/sign-out.component';
import { RolTypes } from './shared/models/roles.model';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  /* flag para indicar si el usuario esta logueado */
  userIsLogged!: boolean;
  /** app title */
  title = 'UNAJ Labs';
  /** Selected language */
  language!: string;
  /** tema seleccionado */
  isDarkTheme = false; // Puedes ajustar esta variable según tus necesidades para alternar entre el tema light y dark
  /** Main observable ta listen for changes */
  mainHandler$!: Observable<any>;
  /** roles de la app */
  roles = RolTypes
  isMobile!: Observable<boolean>;
  /**
   * constructor del componente
   * @param lenguajeService servicio de lenguaje
   * @param temaService servicio de tema
   * @param perfilService servicio de perfil
   * @param renderer servicio de renderizado
   * @param router servicio de ruteo
   * @param authService servicio de autenticacion
   * @param dialog servicio de dialogo
   * @param breakpointObserver servicio de observacion de cambios de pantalla
   * @param document servicio de documento
   */
  constructor(
    private lenguajeService: LanguageService,
    private temaService: ThemesService,
    private perfilService: PerfilService,
    private renderer: Renderer2,
    private router: Router, 
    private authService: AuthService,
    public dialog: MatDialog,
    breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    ) {
      this.isMobile = breakpointObserver
      .observe('(max-width: 425px)')
      .pipe(map(({ matches }) => (matches)));
  }
  /** onInit hook */
  ngOnInit(): void {    
    this.mainHandler$ = merge(
      this.authService.isLogged$.pipe(tap((isLogged) => this.userIsLogged = isLogged)),
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
  /**
   * abre el dialogo de cerrar sesion
   */
  openLogout(){
    this.dialog.open(SignOutComponent, {
      width: '350px',
    });
  }
  /**
   * abre el dialogo de iniciar sesion
   */
  openLogin(){
    this.router.navigate(['/sign-in']);
  }
    /**
   * abre el dialogo de registracion
   */
  openSignUp(){
    this.router.navigate(['/sign-up']);
  }
      /**
   * regresa a la pantalla de home
   */
  toHome(){
    this.router.navigate(['/home']);
  }
}
