import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,SidebarComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}
