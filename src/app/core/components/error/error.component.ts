import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { MessageComponent } from '../message/message.component';
import { Error, ErrorService } from '../../services/error.service';
import { MessageTypes } from '../../models/general.model';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit, OnDestroy {
  $errorConfig!: Observable<Error>;
  subscription!: Subscription;
  constructor(
    private errorService: ErrorService,
    private matDialog: MatDialog,
    private translateService: TranslateService
  ) {}

  /**
   * Init hook
   */
  ngOnInit(): void {
    this.$errorConfig = this.errorService.getErrorServiceObserver();
    this.subscription = this.$errorConfig
      .pipe(
        tap((x) => {
          if (x.show) {
            const errorTitle = x.code ? this.translateService.instant(`api.errors.titles.${x.code}`) : this.translateService.instant('api.errors.titles.DEFAULT');
            const errorMessage = x.code ? this.translateService.instant(`api.errors.messages.${x.code}`): this.translateService.instant('api.errors.messages.DEFAULT');

            this.matDialog.open(MessageComponent, {
              data: {
                type: MessageTypes.Error,
                title: errorTitle,
                message: errorMessage,
              },
            });
          }
        })
      )
      .subscribe();
  }
  
  /**
   * Destroy hook
   */
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
