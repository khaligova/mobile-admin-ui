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
import { ExceptionHandlingInterceptor } from '../core/interceptors/exception-handler-interceptor';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PrimeNgToasterService } from '../core/toaster/primeng-toaster.service';
import { ToasterBase } from '../core/toaster/toaster-base';
import { UserBaseService } from './services/back-end-services/users/user-base.service';
import { UserService } from './services/back-end-services/users/user.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: MessageService },
    { provide: UserBaseService, useClass: UserService },
    { provide: ToasterBase, useClass: PrimeNgToasterService },
    // { provide: ErrorHandler, useClass: ExceptionHandling },
    { provide: HTTP_INTERCEPTORS, useClass: ExceptionHandlingInterceptor,multi:true },
  ],
};
