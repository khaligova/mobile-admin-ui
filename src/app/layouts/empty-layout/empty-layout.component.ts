import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-empty-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './empty-layout.component.html',
  styleUrl: './empty-layout.component.scss'
})
export class EmptyLayoutComponent {

}
