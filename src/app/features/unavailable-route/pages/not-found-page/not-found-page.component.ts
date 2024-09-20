import { Component } from '@angular/core';
import { Route, Router, RouterLink, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [ButtonModule,RouterModule],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {
 constructor(private _router:Router){}


  goToHome():void{
     this._router.navigate(['/home']);
  }
}
