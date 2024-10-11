import { Component } from '@angular/core';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { RequiredDirective } from '../../../../../core/directives/required.directive';
@Component({
  selector: 'app-create-version-page',
  standalone: true,
  imports: [
    InputNumberModule,
    InputMaskModule,
    RequiredDirective
  ],
  templateUrl: './create-version-page.component.html',
  styleUrl: './create-version-page.component.scss'
})
export class CreateVersionPageComponent {

}
