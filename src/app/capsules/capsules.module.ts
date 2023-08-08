import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapsulesRoutingModule } from './capsules-routing.module';
import { CapsuleDashboardComponent } from './capsule-dashboard.component';
import { CapsuleService } from './_service/capsule.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [CapsuleDashboardComponent],
  providers: [CapsuleService],
  imports: [
    CommonModule,
    CapsulesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
  ],
})
export class CapsulesModule {}
