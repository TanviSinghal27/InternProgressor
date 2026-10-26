import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Verification } from './components/verification/verification';

export const routes: Routes = [
  { path: '', component: Verification },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [() => sessionStorage.getItem('portalVerified') === 'true'],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
