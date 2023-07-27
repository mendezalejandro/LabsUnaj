import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { IPerfil, Perfil } from 'src/app/core/models/profile.model';
import { PerfilService } from 'src/app/core/services/profile.services';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  /** perfil del usuario */
  profile!: IPerfil;

  constructor(
    private snackBar: MatSnackBar,
    private profileService: PerfilService,
    private translateService: TranslateService
  ) { }


  /** OnInit hook */
  ngOnInit(): void {
    this.profile = this.profileService.get();
  }

  /**
   * resetea el perfil del usuario
   */
  reset() {
    this.profileService.set(new Perfil());
  }
  /**
   * cambiar el idioma de la aplicación
   * @param lang idioma a cambiar
   */
  changeLanguage(lang: string) {
    this.profile.lang = lang;
    this.save();

    const mensaje = `${this.translateService.instant('features.perfil.mensajes.lenguaje-cambiado')} ${this.translateService.instant('features.perfil.lenguaje-opciones.'+this.profile.lang)}`;
    this.snackBar.open(mensaje);
  }
  /**
   * cambiar el tema de la aplicación
   */
  changeTheme() {
    if (this.profile.theme == 'dark')
      this.profile.theme = 'light';
    else
      this.profile.theme = 'dark';
    this.save();
    const mensaje = `${this.translateService.instant('features.perfil.mensajes.tema-cambiado')} ${this.translateService.instant('features.perfil.tema-opciones.'+this.profile.theme)}`;
    this.snackBar.open(mensaje);
  }

  /**
   * guarda el perfil del usuario
   */
  save() {
    this.profileService.set(this.profile);
  }
}