import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesDetailsComponent } from './launches-details.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LandpadsService } from '../_service/landpads.service';
import { of } from 'rxjs';
import { landpadsData, launchesData } from '../landpads-dashboard.constant';
import { DashboardType, LaunchesType } from '../landpads-dashboard.interface';

describe('LaunchesDetailsComponent', () => {
  let component: LaunchesDetailsComponent;
  let fixture: ComponentFixture<LaunchesDetailsComponent>;

  beforeEach(async () => {
    const landpadsServiceSub = () => ({
      getLandingPadsDetailsById: (_id: string) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      getLaunchesDetailsById: (_id: string) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
    });

    await TestBed.configureTestingModule({
      declarations: [LaunchesDetailsComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: {
                get: (landingPadId: string) => {
                  return { landingPadId: '5e9e3032383ecb267a34e7c7' };
                },
              },
            },
          },
        },
        {
          provide: MatDialog,
        },
        {
          provide: LandpadsService,
          useFactory: landpadsServiceSub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchesDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when ngOnInit is called', () => {
    it('makes ngOnInit expected calls', () => {
      const landpadsDetailsDataMock = landpadsData as unknown as DashboardType;
      const launchesDetailsDataMock = launchesData as unknown as LaunchesType;

      const landpadsService = TestBed.inject(LandpadsService);
      spyOn(landpadsService, 'getLandingPadsDetailsById').and.returnValue(
        of(landpadsDetailsDataMock)
      );
      spyOn(landpadsService, 'getLaunchesDetailsById').and.returnValue(
        of(launchesDetailsDataMock)
      );
      component.getLandingPadsDetailsById();
      component.ngOnInit();
      expect(component.ngOnInit).toBeTruthy();
    });
  });

  describe('when getlaunchesData is called', () => {
    it('makes getlaunchesData expected calls', () => {
      const launchesDetailsDataMock = launchesData as unknown as LaunchesType;
      const landpadsService = TestBed.inject(LandpadsService);

      spyOn(landpadsService, 'getLaunchesDetailsById').and.returnValue(
        of(launchesDetailsDataMock)
      );
      component.getlaunchesData(launchesDetailsDataMock);
      expect(component.getlaunchesData).toBeTruthy();
    });
  });
});
