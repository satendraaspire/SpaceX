import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandpadsDialogComponent } from './landpads-dialog.component';

describe('LandpadsDialogComponent', () => {
  let component: LandpadsDialogComponent;
  let fixture: ComponentFixture<LandpadsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandpadsDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandpadsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
