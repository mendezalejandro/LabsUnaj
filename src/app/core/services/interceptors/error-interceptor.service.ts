import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../error.service';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private errorService: ErrorService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const $obs = next
      .handle(req)
      .pipe(
        catchError((err)=>this.handleError(err))
        );
    return $obs;
  }

  public handleError(err: HttpErrorResponse)
  {
    const error = err.error || err;
    this.errorService.showError(err.name, error.message);
    return throwError(err);
  }
}
