import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DragonService } from './_service/dragon.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-dragon-dashboard',
  templateUrl: './dragon-dashboard.component.html',
  styleUrls: ['./dragon-dashboard.component.css'],
})
export class DragonDashboardComponent implements OnInit, AfterViewInit {
  public displayedColumns!: any[];
  public dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table!: MatTable<any>;

  constructor(private dragonService: DragonService) {}

  public ngOnInit(): void {
    this.getAllDragons();
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getAllDragons() {
    this.dragonService.getAllDragons().subscribe((res) => {
      this.displayedColumns = [
        'name',
        'type',
        'active',
        'description',
        'wiki-link',
      ];
      this.dataSource.data = res;
    });
  }

  public dropTable(event: CdkDragDrop<any>) {
    if (event) {
      moveItemInArray(
        this.dataSource.data,
        event.previousIndex,
        event.currentIndex
      );
      this.dataSource.data = [...this.dataSource.data];
    }
  }
}
