import { Routes } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { ActiveComponent } from './pages/active/active.component';
import { CompletedComponent } from './pages/completed/completed.component';

export const routes: Routes = [
  { 
    path: '', 
    component: AllComponent 
  },
  { 
    path: 'active', 
    component: ActiveComponent 
  },
  {
    path: 'completed',
    component: CompletedComponent
  }
];
