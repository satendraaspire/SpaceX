import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragonDashboardComponent } from './dragon-dashboard.component';
import { DragonService } from './_service/dragon.service';

const routes: Routes = [
  {
    path:'',
    component:DragonDashboardComponent,
    title:'Dragon Dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers:[
    DragonService
  ],
  exports: [RouterModule]
})
export class DragonRoutingModule { }
