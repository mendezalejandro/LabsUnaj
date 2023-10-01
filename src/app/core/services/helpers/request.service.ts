import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/**
 * Clase que representa las opciones que pueden aplicarse al interceptor de Request
 */
 export class RequestOptions {
  // flag para indicar si al hacer un request se bloquea la llamada con un loading modal.
  public silent: boolean= false;
}

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  
  constructor(private http: HttpClient) {}
  /**
   * Realiza el http request y parsea la información que recibe.
   * @param params Parametros de busqueda
   * @returns Retorna un observable del tipo generico especificado
   */

  /**
   * Realiza el http request y parsea la información que recibe
   * @param url del endpoint
   * @param params parametros del body
   * @param options opciones de request
   * @returns Retorna un observable del tipo generico especificado
   */
  post<T>(url:string, params: any, options?: RequestOptions) {
    return this.http.post<T>(url, params, this.getHeaders(options!)).pipe(
      map((response) => {
        return response as T;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  /**
   * Realiza el http request con metodo PUT para insertar o modificar un registro
   * @param url del endpoint
   * @param params parametros del body para insertar o modificar
   * @param options opciones de request
   * @returns Retorna un observable del tipo generico especificado
   */
  put<T>(url:string, params: any, options?: RequestOptions) {
    return this.http.put<T>(url, params, this.getHeaders(options!)).pipe(
      map((response) => response as T),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  /**
   * Realiza el http request con metodo DELETE para eliminar un registro
   * @param url del endpoint
   * @param params parametros del body para eliminar
   * @param options opciones de request
   * @returns Retorna un observable del tipo generico especificado
   */
  delete<T>(url:string, params: any, options?: RequestOptions) {
    return this.http.delete<T>(url,{body:params, ...this.getHeaders(options!)}).pipe(
      map((response) => response as T),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  //#region Private methods
  /**
   * Convierte las opciones del usuario en headers para el request
   * @param options Opciones para el request
   * @returns Objeto Headers
   */
  private getHeaders(options: RequestOptions){
    const silent = options?.silent ? 'true' : 'false';
    const requestOptions = { headers: { 'silent': silent } };

    return requestOptions;
  };
  //#endregion
}
