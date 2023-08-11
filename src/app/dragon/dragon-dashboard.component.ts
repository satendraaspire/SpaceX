import { Component, OnInit, ViewChild } from '@angular/core';
import { DragonService } from './_service/dragon.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragonType, QueryType } from './dragon-dashboard.interface';
import { pageIndexData } from './dragon-dashboard.constant';

@Component({
  selector: 'app-dragon-dashboard',
  templateUrl: './dragon-dashboard.component.html',
  styleUrls: ['./dragon-dashboard.component.css'],
})
export class DragonDashboardComponent implements OnInit {
  public displayedColumns!: string[];
  public dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table!: MatTable<DragonType>;
  public totalLength!: number;

  constructor(private dragonService: DragonService) {}

  public ngOnInit(): void {
    this.getAllDragons();
  }

  public getAllDragons() {
    const data = {
      options: {
        limit: 1,
      },
    };
    this.getDragonsDetailsWithQuery(data);
  }

  public getDragonsDetailsWithQuery(data: QueryType) {
    this.dragonService.getDragonsDetailsWithQuery(data).subscribe((res) => {
      this.displayedColumns = [
        'name',
        'type',
        'active',
        'description',
        'wiki-link',
      ];
      this.totalLength = res.totalDocs;
      this.dataSource.data = res.docs;
    });
  }

  public dropTable(event: CdkDragDrop<MatTableDataSource<unknown>>) {
    if (event) {
      moveItemInArray(
        this.dataSource.data,
        event.previousIndex,
        event.currentIndex
      );
      this.dataSource.data = [...this.dataSource.data];
    }
  }

  public getPaginatorByQuery() {
    if (this.paginator.pageIndex != pageIndexData.initail) {
      const data = {
        options: {
          limit: this.paginator.pageSize,
          page: this.paginator.pageIndex + pageIndexData.current,
          sort: { name: this.sort.direction },
        },
      };
      this.getDragonsDetailsWithQuery(data);
    } else {
      const data = {
        options: {
          limit: this.paginator.pageSize,
          sort: { name: this.sort.direction },
        },
      };
      this.getDragonsDetailsWithQuery(data);
    }
  }

  public getSortingByQuery() {
    const data = {
      options: {
        limit: this.paginator.pageSize,
        sort: { name: this.sort.direction },
      },
    };
    this.getDragonsDetailsWithQuery(data);
  }
}
