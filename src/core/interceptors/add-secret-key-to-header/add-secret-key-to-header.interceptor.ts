import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AddSecretKeyToHeaderInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let secretKey: string = localStorage.getItem("secretKey");
        let request = req.clone({
            setHeaders: { AuthenticationSecretKey: secretKey }
        });
        return next.handle(request);
    }

}