import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject} from 'rxjs';

export class Error{
  code!: string;
  title!:string;
  message?:string;
  status?:number;
  show:boolean=false;
}
@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private error: Error = new Error();
  $errorState: BehaviorSubject<Error> = new BehaviorSubject<Error>(this.error);
  constructor() {
  }

  getErrorServiceObserver(){
    return this.$errorState.asObservable();
  }
  showError(code:string){
    
    // busco la traducción del error
    this.error.code = code;
    this.error.show = true;
    // this.error.title = title;
    // this.error.message = message;
    this.$errorState.next(this.error);
  }
  // showError(title:string, message?: string){
    
  //   // busco la traducción del error
  //   const errorTitle = title ? this.translateService.instant(`api.errors.titles.${title}`) : this.translateService.instant('api.errors.titles.DEFAULT');
  //   const errorMessage = title ? this.translateService.instant(`api.errors.messages.${title}`): this.translateService.instant('api.errors.messages.DEFAULT');

  //   this.error.show = true;
  //   this.error.title = title;
  //   this.error.message = message;
  //   this.$errorState.next(this.error);
  // }

  closeError(){
    this.$errorState.next(new Error());
  }

}
