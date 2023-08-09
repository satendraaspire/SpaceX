import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragonRoutingModule } from './dragon-routing.module';
import { DragonDashboardComponent } from './dragon-dashboard.component';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [DragonDashboardComponent],
  imports: [
    CommonModule,
    DragonRoutingModule,
    MatTableModule,
    MatCardModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
  ],
})
export class DragonModule {}
