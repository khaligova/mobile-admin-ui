import {
  ApplicationConfig,
  ErrorHandler,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ExceptionHandling } from '../exception-handling';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ExceptionHandlingInterceptor } from '../interceptors/exception-handler-interceptor';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { ToastService } from '../messages/toast/toast.service';
import { IToastInterface } from '../messages/toast/itoast-interface';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    // { provide: ErrorHandler, useClass: ExceptionHandling },
    { provide: HTTP_INTERCEPTORS, useClass: ExceptionHandlingInterceptor },
    { provide: MessageService },
    { provide: IToastInterface, useClass: ToastService ,multi:true},
  ],
};
