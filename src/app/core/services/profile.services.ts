import { Injectable } from "@angular/core";
import { IPerfil, Perfil } from "../models/profile.model";
import { BehaviorSubject } from "rxjs";
import { LanguageService } from "src/app/core/services/language.service";
import { LocalStorageService } from "src/app/core/services/localstorage.service";
import { ThemesService } from "src/app/core/services/themes.service";


@Injectable({ providedIn: 'root' })
export class PerfilService {
  /** private subject that holds the profile */
  private profileSubject: BehaviorSubject<Perfil> = new BehaviorSubject({} as Perfil);
  /** observable to propagate the profile */
  profileState$ = this.profileSubject.asObservable();

  constructor(
    private localService: LocalStorageService,
    private themeService: ThemesService,
    private langService: LanguageService
  ) { }

  /** gets the profile from storage */
  get() {
    const p = this.localService.profileGet()
    //TODO: save in localstorage?
    //p.TripSearchFilters = this.boardingFilters;
    return p;
  }

  /**
   * sets the profile on storage and trigger the changes
   * @param userprofile new profile to set
   * @param withExpiration flag to trigger setting the expiration date of the signin profile
   * @param execApply flag to trigger the propagation of the changes in the profile (lang, theme)
   */
  set(userprofile: Perfil, withExpiration: boolean = false, execApply: boolean = true) {
    this.localService.profileSet(userprofile, withExpiration);
    if (execApply) this.apply(userprofile);
  }

  /**
   * loads the user profile and trigger the changes
   */
  load() {
    try {
      const profile = this.localService.profileGet();
      this.apply(profile);
    } catch (_) { };
  }

  /**
   * apply the changes on the profile
   * @param userprofile profile to apply
   */
  apply(userprofile: IPerfil) {
    this.langService.change(userprofile.lang);
    this.themeService.change(userprofile.theme);

    this.profileSubject.next(userprofile);
  }

  /**
   * obtiene el idioma del perfil
   * @returns idioma del perfil
   */
  getLocale(): string {
    const p = this.localService.profileGet();
    return p.lang;
  }
}