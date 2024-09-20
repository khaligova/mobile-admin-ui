import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserBaseService } from './user-base.service';
import { LoginRequest } from './models/requests/login-request';
import { LoginResponse } from './models/responses/login-response';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class UserService extends UserBaseService {
  private baseUrl: string = 'http://dev-mobile-admin-api.azsoftware.az';
  private controller: string = 'User';
  
  constructor(private _httpclient : HttpClient) {
      super();
  }


  override login(secretKey: string): Promise<LoginResponse> {
    let requestUrl:string = `${this.baseUrl}/${this.controller}/Login`;
    let request : LoginRequest = new LoginRequest();
    request.secretKey = secretKey;
    let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'AuthenticationSecretKey': 'dhjKAu6MHfE/xdsK2Evk3FOCrfwIswLSiObVG7ngL+XizQd5v8n36BZw27yefHNuh1b6muok5RgPFNFovjI3Zw=='});
    let options = { headers: headers };
    return firstValueFrom(this._httpclient.post<LoginResponse>(requestUrl,request,options));
  }



}
