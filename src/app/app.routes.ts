import { Routes } from '@angular/router';
import { MainLayout } from './layout/MainLayout/MainLayout';

export const routes: Routes = [
  { path: 'home', component: MainLayout },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
