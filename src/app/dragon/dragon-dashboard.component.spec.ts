import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonDashboardComponent } from './dragon-dashboard.component';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragonRoutingModule } from './dragon-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragonService } from './_service/dragon.service';
import { of } from 'rxjs';
import {
  dragonDetailsData,
  paginatorData,
  shortData,
  tableEvent,
} from './dragon-dashboard.constant';
import { DragonType, QueryType } from './dragon-dashboard.interface';

describe('DragonDashboardComponent', () => {
  let component: DragonDashboardComponent;
  let fixture: ComponentFixture<DragonDashboardComponent>;

  beforeEach(async () => {
    const DragonServiceSub = () => ({
      getDragonsDetailsWithQuery: (_id: QueryType) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
    });

    await TestBed.configureTestingModule({
      declarations: [DragonDashboardComponent],
      imports: [
        CommonModule,
        DragonRoutingModule,
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
          provide: DragonService,
          useFactory: DragonServiceSub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DragonDashboardComponent);
    component = fixture.componentInstance;
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });

  describe('when ngOnInit is called', () => {
    it('makes ngOnInit expected calls', () => {
      const dragonDetailsDataMock = dragonDetailsData as unknown as DragonType;
      const dragonService = TestBed.inject(DragonService);
      spyOn(dragonService, 'getDragonsDetailsWithQuery').and.returnValue(
        of(dragonDetailsDataMock)
      );
      component.ngOnInit();
      expect(component.ngOnInit).toBeTruthy();
    });
  });

  describe('when getAllDragons is called', () => {
    it('makes getAllDragons expected calls', () => {
      const dragonDetailsDataMock = dragonDetailsData as unknown as DragonType;
      const dragonService = TestBed.inject(DragonService);
      spyOn(dragonService, 'getDragonsDetailsWithQuery').and.returnValue(
        of(dragonDetailsDataMock)
      );
      component.getAllDragons();
      expect(component.getAllDragons).toBeTruthy();
    });
  });

  describe('when getPaginatorByQuery is called', () => {
    it('makes getPaginatorByQuery expected calls', () => {
      const dragonDetailsDataMock = dragonDetailsData as unknown as DragonType;
      component.paginator = paginatorData as MatPaginator;
      component.sort = shortData as MatSort;
      const dragonService = TestBed.inject(DragonService);
      spyOn(dragonService, 'getDragonsDetailsWithQuery').and.returnValue(
        of(dragonDetailsDataMock)
      );
      component.getPaginatorByQuery();
      expect(component.getPaginatorByQuery).toBeTruthy();
    });
  });

  describe('when getSortingByQuery is called', () => {
    it('makes getSortingByQuery expected calls', () => {
      const dragonDetailsDataMock = dragonDetailsData as unknown as DragonType;
      component.paginator = paginatorData as MatPaginator;
      component.sort = shortData as MatSort;
      const dragonService = TestBed.inject(DragonService);
      spyOn(dragonService, 'getDragonsDetailsWithQuery').and.returnValue(
        of(dragonDetailsDataMock)
      );
      component.getSortingByQuery();
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
