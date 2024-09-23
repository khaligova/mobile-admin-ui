import { Component } from '@angular/core';
import { SideBarItem } from './models/sidebar-item';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public items: SideBarItem[] = [
    new SideBarItem("Ana səhifə", "house",""),
    new SideBarItem("Versiyalar", "phone",""),
    new SideBarItem("İstifadəçilər", "person-gear",""),
    new SideBarItem("Store istifadəçiləri", "person-check",""),
  ]

  public collapsed: boolean = false;

  collapse() {
    this.collapsed=!this.collapsed;
  }
}



