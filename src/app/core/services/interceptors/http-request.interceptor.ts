import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/app/environments/environment';
import { AuthService } from '../../auth/auth.service';

const apiURL = environment.apiEndpoint;
@Injectable({ providedIn: 'root' })
export class HttpRequestInterceptorService implements HttpInterceptor {
	constructor(private authService: AuthService
	) { }

	/** Intercepts all HTTP requests! */
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const isAPI = request.url.includes(apiURL);
		const withToken = (!request.headers.has('withToken')) || (request.headers.has('withToken') && request.headers.get('withToken') === 'true');
		
		if(isAPI && withToken){
			const token = this.authService.getUserToken();
			return next.handle(this.buildRequest(request, token));
		}
		else return next.handle(request);
	}


	/**
	 * Builds the request with the token
	 * @param request request
	 * @param token token
	 * @returns 
	 */
	buildRequest(request: HttpRequest<any>, token: string) {
		return request.clone({
			setHeaders: {
				Authorization: token,
			}
		})
	}
}
