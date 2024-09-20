import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { BaseToasterService } from '../../toaster/base-toaster.service';
import { Router } from '@angular/router';
import { ProblemDetail } from './problem-detail';
import { BaseSpinnerService } from '../../spinner/base-spinner.service';

@Injectable()
export class ExceptionHandlingInterceptor implements HttpInterceptor {
  constructor(private _toasterService: BaseToasterService, private _router: Router, private readonly _spinnerService: BaseSpinnerService,) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((error) => {
      let catchError = error as HttpErrorResponse;
      this.handleException(catchError);
      return of(error);
    }));
  }

  handleException(errorResp: HttpErrorResponse) {
    this._spinnerService.hide();

    let problemDetail: ProblemDetail = JSON.parse(JSON.stringify(errorResp.error));
    this[`handle${errorResp.status}Error`](problemDetail);
  }

  handle400Error(problemDetail: ProblemDetail) {
    this._toasterService.showInfo(problemDetail.Detail, "Diqqət");
  }

  handle500Error(problemDetail: ProblemDetail) {
    this._toasterService.showDanger(problemDetail.Detail, "Diqqət");
  }

  handle401Error(problemDetail: ProblemDetail) {

  }

  handle422Error(problemDetail: ProblemDetail) {

  }

  handle424Error(problemDetail: ProblemDetail) {

  }

}


