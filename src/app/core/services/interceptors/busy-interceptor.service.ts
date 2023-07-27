import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { BusyService } from '../busy.service';

@Injectable({ providedIn: 'root' })
export class BusyInterceptorService implements HttpInterceptor {
  constructor(private busyService: BusyService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // chequeo si tengo que mostrar el loading modal
    if (req.headers.get('silent') === 'false') {
      this.busyService.showProcessing();
    }

    // no puedo enviar headers desconocidos por CORS, elimino el flag que ya utilicé y clono el request
    const newHeaders = req.headers.delete('silent')
    const newRequest = req.clone({ headers: newHeaders });

    const $obs = next
      .handle(newRequest)
      .pipe(finalize(() => this.busyService.hideProcessing()));
    return $obs;
  }
}
