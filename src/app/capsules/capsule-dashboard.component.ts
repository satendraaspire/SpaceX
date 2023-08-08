import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CapsuleService } from './_service/capsule.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-capsule-dashboard',
  templateUrl: './capsule-dashboard.component.html',
  styleUrls: ['./capsule-dashboard.component.css']
})
export class CapsuleDashboardComponent implements OnInit, AfterViewInit {

  public displayedColumns!: any[];
  public dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table!: MatTable<any>;

  constructor(private capsuleService: CapsuleService) {}

  public ngOnInit(): void {
    this.getAllCapsules();
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getAllCapsules() {
    this.capsuleService.getAllCapsules().subscribe((res) => {

      this.displayedColumns = [
        'serial',
        'status',
        'type',
        'water_landings',
        'land_landing',
        'launches',
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
