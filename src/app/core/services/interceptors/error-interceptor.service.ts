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
/**
 * intercepta los errores de la api
 */
@Injectable({ providedIn: 'root' })
export class ErrorInterceptorService implements HttpInterceptor {
  /**
   * constructor del interceptor
   * @param errorService servicio de errores
   */
  constructor(private errorService: ErrorService) { }

  /**
   * intercepta los errores de la api
   * @param req request
   * @param next handler
   * @returns `Observable` con el evento http
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const $obs = next
      .handle(req)
      .pipe(
        catchError((err) => this.handleError(err))
      );
    return $obs;
  }

  /**
   * maneja el error
   * @param err error
   * @returns `Observable` con el error
   */
  public handleError(err: HttpErrorResponse) {
    const error = err.error || err;
    const errorCode = error!.codigo;
    this.errorService.showError(errorCode);
    return throwError(err);
  }
}
