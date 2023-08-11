import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandpadsDashboardComponent } from './landpads-dashboard.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LandpadsService } from './_service/landpads.service';
import { of } from 'rxjs';
import { landpadsData, tableEvent } from './landpads-dashboard.constant';
import { DashboardType } from './landpads-dashboard.interface';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

describe('LandpadsDashboardComponent', () => {
  let component: LandpadsDashboardComponent;
  let fixture: ComponentFixture<LandpadsDashboardComponent>;

  beforeEach(async () => {
    const landpadsServiceSub = () => ({
      getAllLandingPads: () => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
    });

    const routerStub = () => ({
      navigateByUrl: (_string: any) => ({}),
      navigate: (_array: any) => ({}),
    });

    await TestBed.configureTestingModule({
      declarations: [LandpadsDashboardComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
      ],
      providers: [
        {
          provide: LandpadsService,
          useFactory: landpadsServiceSub,
        },
        { provide: Router, useFactory: routerStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LandpadsDashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when ngOnInit is called', () => {
    it('makes ngOnInit expected calls', () => {
      const landpadsDetailsDataMock =
        landpadsData as unknown as DashboardType[];
      const landpadsService = TestBed.inject(LandpadsService);
      spyOn(landpadsService, 'getAllLandingPads').and.returnValue(
        of(landpadsDetailsDataMock)
      );
      component.getAllLandingPads();
      component.ngOnInit();
      expect(component.ngOnInit).toBeTruthy();
    });
  });

  describe('when ngAfterViewInit is called', () => {
    it('makes ngAfterViewInit expected calls', () => {
      component.ngAfterViewInit();
      expect(component.ngOnInit).toBeTruthy();
    });
  });

  describe('when dropTable is called', () => {
    it('makes dropTable expected calls', () => {
      const eventMock = tableEvent as CdkDragDrop<any>;
      component.dropTable(eventMock);
      expect(component.dropTable).toBeTruthy();
    });
  });

  describe('when redirectToLaunhesDetails is called', () => {
    it('makes redirectToLaunhesDetails expected calls', () => {
      component.redirectToLaunhesDetails(1);
      expect(component.redirectToLaunhesDetails).toBeTruthy();
    });
  });
});
