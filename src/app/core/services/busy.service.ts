import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class BusyConfiguration{
  processing:boolean=false;
  message?:string = 'Processing';
}
@Injectable({
  providedIn: 'root'
})
export class BusyService {
  private busyConfiguration: BusyConfiguration = new BusyConfiguration();
  $busyState: BehaviorSubject<BusyConfiguration> = new BehaviorSubject<BusyConfiguration>(this.busyConfiguration);
  constructor() {
  }

  getBusyServiceObserver(){
    return this.$busyState.asObservable();
  }
  showProcessing(message?: string){
    this.busyConfiguration.processing = true;
    this.busyConfiguration.message = message;
    this.$busyState.next(this.busyConfiguration);
  }

  hideProcessing(){
    this.busyConfiguration.processing = false;
    this.$busyState.next(this.busyConfiguration);
  }
}
