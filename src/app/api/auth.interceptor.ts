import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {EventEmitter, Injectable, Injector} from '@angular/core';
import { Router } from "@angular/router";
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector, private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


      const token: string = localStorage.getItem('reportwork_token');
      const tempRequest =  next.handle(token ? request.clone({ setHeaders: { 'Authorization': `JWT ${token}` , 'content-type': 'Application/json'}}) : request.clone({ setHeaders: {'content-type': 'Application/json'}}))
        .pipe(map(response => {
          return response;
        }), catchError(err => this.handleError(err)));
      return tempRequest;

  }

  private handleError(error: HttpErrorResponse): Observable<any> {
// console.log(error);
    const token: string = localStorage.getItem('reportwork_token');

    if (token) {

      // if (error.error instanceof ErrorEvent) {
      //   // A client-side or network error occurred. Handle it accordingly.
      //
      //   hideNotification();
      //   showNotification('top', 'right', 4, 'Failed to process your request. Try again', 500);
      //   return throwError(error); // return error
      // } else {
      //   // A serve-side or network error occurred. Handle it accordingly.
      //   hideNotification();
      //   if (error.status == 304) {
      //     showNotification('top', 'right', 4, error.statusText + '. Try again', 500);
      //   } else if (error.status == 500) {
      //     showNotification('top', 'right', 4, 'Failed to process your request. Try again', 500);
      //   } else if (error.status == 504) {
      //     showNotification('top', 'right', 4, 'Failed to process your request. Check your network and try again', 500);
      //   } else if (error.status == 405) {
      //     showNotification('top', 'right', 4, 'Failed to process your request. Try again', 500);
      //   } else if (error.status == 400) {
      //     showNotification('top', 'right', 4, 'Failed due to bad request. Check your data and try again.', 400);
      //   } else if (error.status == 401) {
      //     showNotification('top', 'right', 4, 'You are not authorized', 500);
      //     // if (this.router) {
      //       this.router.navigate(['logout']);
      //     // }
      //   }
      //   // showNotification('top', 'right', 4, error.statusText + '. Try again', 1000);
      //
      // }
      return throwError(error); // return error
    } else { // if the token not found just return the error
      return throwError(error);
    }


  }
}
