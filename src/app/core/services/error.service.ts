import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

export class Error{
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
  showError(title:string, message?: string){
    this.error.show = true;
    this.error.title = title;
    this.error.message = message;
    this.$errorState.next(this.error);
  }

  closeError(){
    this.$errorState.next(new Error());
  }

}
