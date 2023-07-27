import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subject } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { environment } from "src/app/environments/environment";

/** path to the resource folder */
const resourcesFolder = 'assets/i18n';
/** default language for translations */
const defaultLanguage = environment.defaultLang;

/**
 * Language list interface
 */
interface LanguageList {
  langs: Language[];
}
/**
 * Language definition interface
 */
export interface Language {
  name: string;
  code: string;
  flag: string;
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  /** local subject to propagate de changes of languages */
  private languageSubject: Subject<string> = new Subject();
  /** public observable to hook changes */
  language = this.languageSubject.asObservable().pipe(
    shareReplay()
  );

  constructor(private translateService: TranslateService, private http: HttpClient) {
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
  }

  /**
   * Function to trigger language changes
   * @param lang new language to set
   */
  change(lang: string) {
    this.translateService.use(lang);
    this.languageSubject.next(lang);
  }

  /**
   * List of languages available (defined in `langs.json`)
   * @returns `LanguageList[]` available
   */
  getLangs() {
    return this.http.get<LanguageList>(`${resourcesFolder}/langs.json`).pipe(
      map((x) => x.langs)
    );
  }
}