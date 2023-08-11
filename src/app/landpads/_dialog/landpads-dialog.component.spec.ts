import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandpadsDialogComponent } from './landpads-dialog.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LandpadsService } from '../_service/landpads.service';
import {
  capsulesData,
  dialogData,
  payLoadsData,
  shipsData,
} from './landpads-dialog.constant';
import { LandPadsOptionsType } from './landpads-dialog.interface';
import { of } from 'rxjs';
import {
  CapsuleType,
  PayloadType,
  ShipType,
} from '../landpads-dashboard.interface';
import { MatTableModule } from '@angular/material/table';

describe('LandpadsDialogComponent', () => {
  let component: LandpadsDialogComponent;
  let fixture: ComponentFixture<LandpadsDialogComponent>;

  beforeEach(async () => {
    const landpadsServiceSub = () => ({
      getShipsDetailsById: (_id: string) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      getCapsulesDetailsById: (_id: string) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      getPayloadsDetailsById: (_id: string) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
    });

    await TestBed.configureTestingModule({
      declarations: [LandpadsDialogComponent],
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
          provide: MatDialog,
        },
        {
          provide: LandpadsService,
          useFactory: landpadsServiceSub,
        },
        {
          provide: MatDialogRef,
          useValue: {},
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LandpadsDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when ngOnInit is called', () => {
    it('makes ngOnInit expected calls', () => {
      component.data = dialogData as unknown as LandPadsOptionsType;
      const shipsMockData = shipsData as unknown as ShipType;
      const capsulesMockData = capsulesData as unknown as CapsuleType;
      const payloadsMockData = payLoadsData as unknown as PayloadType;

      const landpadsService = TestBed.inject(LandpadsService);
      spyOn(landpadsService, 'getShipsDetailsById').and.returnValue(
        of(shipsMockData)
      );
      landpadsService.getShipsDetailsById('5ea6ed2e080df4000697c906');
      spyOn(landpadsService, 'getCapsulesDetailsById').and.returnValue(
        of(capsulesMockData)
      );
      spyOn(landpadsService, 'getPayloadsDetailsById').and.returnValue(
        of(payloadsMockData)
      );

      component.ngOnInit();
      expect(component.ngOnInit).toBeTruthy();
    });
  });
});
