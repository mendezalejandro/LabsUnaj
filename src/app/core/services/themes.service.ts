import { Injectable } from "@angular/core";
import { of, Subject } from "rxjs";

/**
 * Theme definition interface
 */
export interface Theme {
  name: string;
  code: string;
}
/** List of available thems */
const themes: Theme[] = [{ name: 'light', code: 'light' }, { name: 'dark', code: 'dark' }];

/**
 * Service to implemente the differents Themes of the app
 */
@Injectable({ providedIn: 'root' })
export class ThemesService {
  /** local subject to propagate de changes of themes */
  private theme = new Subject<string>();
  /** public observable to hook changes */
  themehandler = this.theme.asObservable();

  constructor() { }

  /**
   * Function to trigger theme changes
   * @param theme new theme to set
   */
  change(theme: string) {
    this.theme.next(theme);
  }

  /**
   * List of themes available
   * @returns `Theme[]` available
   */
  getThemes() {
    return of(themes);
  }
}