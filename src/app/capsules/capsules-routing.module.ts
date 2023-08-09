import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsuleDashboardComponent } from './capsule-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'capsules-dashboard',
    component: CapsuleDashboardComponent,
    title:'Capsules Dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapsulesRoutingModule {}
