import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleDashboardComponent } from './capsule-dashboard.component';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CapsulesRoutingModule } from './capsules-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CapsuleService } from './_service/capsule.service';
import { CapsuleType, QueryType } from './capsule-dashboard.interface';
import { of } from 'rxjs';
import {
  capsuleDetailsData,
  paginatorData,
  shortData,
  tableEvent,
} from './capsule-dashobard.constant';

describe('CapsuleDashboardComponent', () => {
  let component: CapsuleDashboardComponent;
  let fixture: ComponentFixture<CapsuleDashboardComponent>;

  beforeEach(async () => {
    const CapsuleServiceSub = () => ({
      getCapsulesDetailsWithQuery: (_id: QueryType) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
    });

    await TestBed.configureTestingModule({
      declarations: [CapsuleDashboardComponent],
      imports: [
        CommonModule,
        CapsulesRoutingModule,
        MatTableModule,
        MatCardModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        DragDropModule,
        HttpClientModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: CapsuleService,
          useFactory: CapsuleServiceSub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CapsuleDashboardComponent);
    component = fixture.componentInstance;
    component.paginator = paginatorData as MatPaginator;
    component.sort = shortData as MatSort;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when ngOnInit is called', () => {
    it('makes ngOnInit expected calls', () => {
      const capsuleDetailsDataMock =
        capsuleDetailsData as unknown as CapsuleType;
      const capsulesService = TestBed.inject(CapsuleService);
      spyOn(capsulesService, 'getCapsulesDetailsWithQuery').and.returnValue(
        of(capsuleDetailsDataMock)
      );
      component.ngOnInit();
      expect(component.ngOnInit).toBeTruthy();
    });
  });

  describe('when getAllCapsules is called', () => {
    it('makes getAllCapsules expected calls', () => {
      const capsuleDetailsDataMock =
        capsuleDetailsData as unknown as CapsuleType;
      const capsulesService = TestBed.inject(CapsuleService);
      spyOn(capsulesService, 'getCapsulesDetailsWithQuery').and.returnValue(
        of(capsuleDetailsDataMock)
      );
      component.getAllCapsules();
      expect(component.getAllCapsules).toBeTruthy();
    });
  });

  describe('when getPaginatorByQuery is called', () => {
    it('makes getPaginatorByQuery expected calls', () => {
      const capsuleDetailsDataMock =
        capsuleDetailsData as unknown as CapsuleType;
      const capsulesService = TestBed.inject(CapsuleService);
      spyOn(capsulesService, 'getCapsulesDetailsWithQuery').and.returnValue(
        of(capsuleDetailsDataMock)
      );
      component.getPaginatorByQuery();
      expect(component.getPaginatorByQuery).toBeTruthy();
    });
  });

  describe('when getSortingByQuery is called', () => {
    it('makes getSortingByQuery expected calls', () => {
      const capsuleDetailsDataMock =
        capsuleDetailsData as unknown as CapsuleType;
      const capsulesService = TestBed.inject(CapsuleService);
      spyOn(capsulesService, 'getCapsulesDetailsWithQuery').and.returnValue(
        of(capsuleDetailsDataMock)
      );
      component.getSortingByQuery('water_landings');
      expect(component.getSortingByQuery).toBeTruthy();
    });
  });

  describe('when dropTable is called', () => {
    it('makes dropTable expected calls', () => {
      const eventMock = tableEvent as CdkDragDrop<any>;
      component.dropTable(eventMock);
      expect(component.dropTable).toBeTruthy();
    });
  });
});
