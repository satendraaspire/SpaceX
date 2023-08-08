import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandpadsDashboardComponent } from './landpads-dashboard.component';

describe('LandpadsDashboardComponent', () => {
  let component: LandpadsDashboardComponent;
  let fixture: ComponentFixture<LandpadsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandpadsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandpadsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
