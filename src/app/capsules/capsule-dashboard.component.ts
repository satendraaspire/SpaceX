import { Component, OnInit, ViewChild } from '@angular/core';
import { CapsuleService } from './_service/capsule.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { CapsuleType, QueryType } from './capsule-dashboard.interface';

@Component({
  selector: 'app-capsule-dashboard',
  templateUrl: './capsule-dashboard.component.html',
  styleUrls: ['./capsule-dashboard.component.css'],
})
export class CapsuleDashboardComponent implements OnInit {
  public displayedColumns!: string[];
  public dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table!: MatTable<CapsuleType>;
  public totalLength!: number;

  constructor(private capsuleService: CapsuleService) {}

  public ngOnInit(): void {
    this.getAllCapsules();
  }

  public getAllCapsules() {
    const data = {
      options: {
        limit: 5,
      },
    };
    this.getCapsulesDetailsWithQuery(data);
  }

  public getCapsulesDetailsWithQuery(data:QueryType) {
    this.capsuleService.getCapsulesDetailsWithQuery(data).subscribe((res) => {
      this.displayedColumns = [
        'serial',
        'status',
        'type',
        'water_landings',
        'land_landing',
        'launches',
      ];
      this.totalLength = res.totalDocs;
      this.dataSource.data = res.docs;
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

  public getPaginatorByQuery() {
    if (this.paginator.pageIndex != 0) {
      const data = {
        options: {
          limit: this.paginator.pageSize,
          page: this.paginator.pageIndex + 1,
          sort: this.sort.direction,
        },
      };
      this.getCapsulesDetailsWithQuery(data);
    } else {
      const data = {
        options: {
          limit: this.paginator.pageSize,
          sort: this.sort.direction,
        },
      };
      this.getCapsulesDetailsWithQuery(data);
    }
  }


}
