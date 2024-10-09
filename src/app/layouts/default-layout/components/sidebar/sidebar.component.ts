import { Component } from '@angular/core';
import { SideBarItem } from './models/sidebar-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public items: SideBarItem[] = [
    new SideBarItem("Ana səhifə", "house","/"),
    new SideBarItem("Versiyalar", "phone","/versions"),
    new SideBarItem("İstifadəçilər", "person-gear",""),
    new SideBarItem("Store istifadəçiləri", "person-check",""),
  ]

  public collapsed: boolean = false;

  constructor(private readonly _router:Router){}

  collapse() {
    this.collapsed=!this.collapsed;
  }

  navigateTo(route:string){
    this._router.navigateByUrl(route);
  }
}



