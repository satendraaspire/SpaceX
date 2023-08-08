import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleDashboardComponent } from './capsule-dashboard.component';

describe('CapsuleDashboardComponent', () => {
  let component: CapsuleDashboardComponent;
  let fixture: ComponentFixture<CapsuleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsuleDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapsuleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
