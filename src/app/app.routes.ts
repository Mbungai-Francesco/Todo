import { Routes } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { ActiveComponent } from './pages/active/active.component';

export const routes: Routes = [
  { 
    path: '', 
    component: AllComponent 
  },
  { 
    path: 'active', 
    component: ActiveComponent 
  },
];
