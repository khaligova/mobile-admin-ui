import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

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
    ],
  },
];
