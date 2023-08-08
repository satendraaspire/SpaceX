import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapsulesRoutingModule } from './capsules-routing.module';
import { CapsuleDashboardComponent } from './capsule-dashboard.component';


@NgModule({
  declarations: [
    CapsuleDashboardComponent
  ],
  imports: [
    CommonModule,
    CapsulesRoutingModule
  ]
})
export class CapsulesModule { }
