import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/login/login.component').then(
        x => x.LoginComponent
      ),
  },
  {
    path: 'dashboard',
    canActivate: [authGuardFn],
    loadComponent: () =>
      import('./modules/deashboard/deashboard.component').then(
        x => x.DeashboardComponent
      ),
  },
];
