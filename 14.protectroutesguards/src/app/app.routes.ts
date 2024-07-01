import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { authGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
    canActivate: [authGuard],
  },
];
