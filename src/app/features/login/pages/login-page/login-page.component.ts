import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PrimeNgToasterService } from '../../../../../core/toaster/primeng-toaster.service';
import { BaseToasterService } from '../../../../../core/toaster/base-toaster.service';
import { UserBaseService } from '../../../../services/back-end-services/users/user-base.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginResponse } from '../../../../services/back-end-services/users/models/responses/login-response';
import { BaseSpinnerService } from '../../../../../core/spinner/base-spinner.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../../layouts/default-layout/components/navbar/navbar.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FloatLabelModule, FormsModule,NavbarComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  secretKey: string = ``;
  enableLoader: boolean = false;
  constructor(
    private readonly _toasterService: BaseToasterService,
    private readonly _userService: UserBaseService,
    private readonly _spinnerService: BaseSpinnerService,
    private readonly _router: Router
  ) { }

  public async login(): Promise<void> {
    this._spinnerService.show();
    let response: LoginResponse = await this._userService.login(this.secretKey);
    this._spinnerService.hide();
    localStorage.setItem("name", response.name);
    localStorage.setItem("secretKey",this.secretKey);
    this._router.navigate(["/home"]);
  }
}
