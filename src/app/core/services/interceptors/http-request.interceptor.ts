import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/app/environments/environment';

const apiURL = environment.apiEndpoint;

@Injectable({ providedIn: 'root' })
export class HttpInterceptorService implements HttpInterceptor {
	constructor(
	) { }
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			map((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse && req.url.includes(apiURL) && (req.method === 'POST' || req.method === 'PUT')) {
					// Si es una solicitud POST y la respuesta es una instancia de HttpResponse,
					// modifica el cuerpo de la respuesta para que sea solo el contenido de "objeto"
					const modifiedResponse = event.clone({
						body: event.body && event.body.objeto ? event.body.objeto : {},
					});
					return modifiedResponse;
				}
				// Devuelve el evento sin cambios para otros casos
				return event;
			})
		);
	}

}
