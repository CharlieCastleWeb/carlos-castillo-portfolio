import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  { path: 'home', component: MainLayout },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
