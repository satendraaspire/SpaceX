import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandpadsRoutingModule } from './landpads-routing.module';

// Service import
import { LandpadsService } from './_service/landpads.service';

// Mat Module imports
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { LandpadsDashboardComponent } from './landpads-dashboard.component';
import { LaunchesDetailsComponent } from './launches-details/launches-details.component';
import { LandpadsDialogComponent } from './_dialog/landpads-dialog.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LandpadsDashboardComponent,
    LaunchesDetailsComponent,
    LandpadsDialogComponent,
  ],
  providers: [LandpadsService],
  imports: [
    CommonModule,
    LandpadsRoutingModule,
    BrowserModule,
    MatTableModule,
    MatCardModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [LandpadsDialogComponent],
})
export class LandpadsModule {}
