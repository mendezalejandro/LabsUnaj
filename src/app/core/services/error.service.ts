import { Injectable } from '@angular/core';
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
    this.$errorState.next(this.error);
  }

  closeError(){
    this.$errorState.next(new Error());
  }

}
