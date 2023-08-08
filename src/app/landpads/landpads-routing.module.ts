import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandpadsDashboardComponent } from './landpads-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:LandpadsDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandpadsRoutingModule { }
