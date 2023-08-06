import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { BusyConfiguration, BusyService } from '../../services/busy.service';

@Component({
  selector: 'app-busy',
  templateUrl: './busy.component.html',
  styleUrls: ['./busy.component.scss']
})
export class BusyComponent implements OnInit, AfterViewInit {
  busyConfiguration: BusyConfiguration = {processing: false, message:''} as BusyConfiguration;
  processing!: boolean;
  constructor(
    private busyService: BusyService
  ) { }

  ngAfterViewInit(): void {
    this.busyService.getBusyServiceObserver().pipe(
      tap(data=>{
        this.busyConfiguration = data;
      })
    ).subscribe();
  }
  ngOnInit(): void {
    
  }
}
