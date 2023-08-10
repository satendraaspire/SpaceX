import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LandpadsService } from './_service/landpads.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DashboardType } from './landpads-dashboard.interface';

@Component({
  selector: 'app-landpads-dashboard',
  templateUrl: './landpads-dashboard.component.html',
  styleUrls: ['./landpads-dashboard.component.css'],
})
export class LandpadsDashboardComponent implements OnInit, AfterViewInit {
  public displayedColumns!: string[];
  public dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table!: MatTable<DashboardType>;

  constructor(
    private landPadsService: LandpadsService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getAllLandingPads();
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getAllLandingPads() {
    this.landPadsService.getAllLandingPads().subscribe((res) => {
      this.displayedColumns = [
        'name',
        'status',
        'type',
        'wikipedia',
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

  public redirectToLaunhesDetails(id: number) {
    this.router.navigate(['/landpads-launches-details'], {
      queryParams: { landingPadId: id },
    });
  }
}
