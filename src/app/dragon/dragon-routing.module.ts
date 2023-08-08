import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragonDashboardComponent } from './dragon-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DragonDashboardComponent,
    title:'Dragon Dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonRoutingModule { }
