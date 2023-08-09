import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandpadsDashboardComponent } from './landpads-dashboard.component';
import { LaunchesDetailsComponent } from './launches-details/launches-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landpads-dashboard',
    pathMatch: 'full',
  },
  {
    path: 'landpads-dashboard',
    component: LandpadsDashboardComponent,
    title: 'Landpads Dashboard',
  },
  {
    path: 'landpads-launches-details',
    component: LaunchesDetailsComponent,
    title: 'Launches Details',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandpadsRoutingModule {}
