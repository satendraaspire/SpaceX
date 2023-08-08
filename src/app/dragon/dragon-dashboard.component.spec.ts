import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonDashboardComponent } from './dragon-dashboard.component';

describe('DragonDashboardComponent', () => {
  let component: DragonDashboardComponent;
  let fixture: ComponentFixture<DragonDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
