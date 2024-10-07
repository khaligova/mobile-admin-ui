import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { NotFoundPageComponent } from './features/unavailable-route/pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { VersionsPageComponent } from './features/versions/pages/versions-page/versions-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: EmptyLayoutComponent,
    children: [
      { path: '', component: LoginPageComponent },
      { path: 'login', component: LoginPageComponent },
    ],
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {path:'',component:HomePageComponent},
      {path:'home',component:HomePageComponent},
      {path:'versions',component:VersionsPageComponent}
    ],
  },
  { path: '**', component: NotFoundPageComponent },
];
