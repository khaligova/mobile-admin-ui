import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IToastInterface } from '../../../../../messages/toast/itoast-interface';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputTextModule,ButtonModule,FloatLabelModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
   constructor(private toastService:IToastInterface){

   }

   show(){
    this.toastService.GetSuccessToastMessage();
   }
}
