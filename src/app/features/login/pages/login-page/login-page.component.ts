import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PrimeNgToasterService } from '../../../../../core/toaster/primeng-toaster.service';
import { ToasterBase } from '../../../../../core/toaster/toaster-base';
import { UserBaseService } from '../../../../services/back-end-services/users/user-base.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginResponse } from '../../../../services/back-end-services/users/models/responses/login-response';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FloatLabelModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  secretKey: string = ``;
  constructor(
    private readonly _toasterService: ToasterBase,
    private _userService: UserBaseService
  ) {}

  public async login(): Promise<void> {
    console.log('showdeyem men nicesen' + this.secretKey);
    // this._toasterService.showSuccess(
    //   'Apiden evvel',
    //   'apiye request atacam indi'
    // );
    let response: LoginResponse = await this._userService.login(this.secretKey);
    console.log("response yazdir:"+ response + '  ' + response.name);
  }
}
