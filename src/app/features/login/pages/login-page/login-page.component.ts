import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PrimeNgToasterService } from '../../../../../core/toaster/primeng-toaster.service';
import { ToasterBase } from '../../../../../core/toaster/toaster-base';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FloatLabelModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})

export class LoginPageComponent {

  constructor(private readonly _toasterService:ToasterBase){}
  

  public show() {
    console.log('showdeyem men nicesen');
    this._toasterService.showSuccess("salam","nicesen");
  }
}
