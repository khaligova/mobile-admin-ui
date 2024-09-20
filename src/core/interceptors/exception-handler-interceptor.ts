import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ToasterBase } from '../toaster/toaster-base';
import { Router } from '@angular/router';

@Injectable()
export class ExceptionHandlingInterceptor implements HttpInterceptor {
  constructor(private _toasterService: ToasterBase, private _router: Router) {}

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {

   return next.handle(req).pipe(

      catchError( (err:HttpErrorResponse,parameter) => {
        if(err){
            if(err.status==404)
             throw this._toasterService.showDanger('page is not found','Not Found');

        }
        return parameter;
      }) 

   )


  }
}
