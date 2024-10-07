import {
  ApplicationConfig,
  ErrorHandler,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ExceptionHandling } from '../core/exception-handling';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ExceptionHandlingInterceptor } from '../core/interceptors/exception-handling/exception-handler.interceptor';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PrimeNgToasterService } from '../core/toaster/primeng-toaster.service';
import { BaseToasterService } from '../core/toaster/base-toaster.service';
import { UserBaseService } from './services/back-end-services/users/user-base.service';
import { UserService } from './services/back-end-services/users/user.service';
import { BaseSpinnerService } from '../core/spinner/base-spinner.service';
import { NgxxSpinnerService } from "../core/spinner/ngxx-spinner.service";
import { VersionBaseService } from './services/back-end-services/versions/version-base.service';
import { VersionService } from './services/back-end-services/versions/version.service';
import { AddSecretKeyToHeaderInterceptor } from '../core/interceptors/add-secret-key-to-header/add-secret-key-to-header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: MessageService },
    { provide: UserBaseService, useClass: UserService },
    {provide:VersionBaseService,useClass:VersionService},
    { provide: BaseToasterService, useClass: PrimeNgToasterService },
    { provide: BaseSpinnerService, useClass: NgxxSpinnerService },
    // { provide: ErrorHandler, useClass: ExceptionHandling },
    { provide: HTTP_INTERCEPTORS, useClass: ExceptionHandlingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AddSecretKeyToHeaderInterceptor, multi: true },
    { provide: "api-base-url", useValue: "http://localhost:5269" }
  ],
};
