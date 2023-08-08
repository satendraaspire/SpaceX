import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandpadsRoutingModule } from './landpads-routing.module';
import { LandpadsDashboardComponent } from './landpads-dashboard.component';


@NgModule({
  declarations: [
    LandpadsDashboardComponent
  ],
  imports: [
    CommonModule,
    LandpadsRoutingModule
  ]
})
export class LandpadsModule { }
