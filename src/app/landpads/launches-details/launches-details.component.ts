import { Component, OnInit } from '@angular/core';
import { LandpadsService } from '../_service/landpads.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LandpadsDialogComponent } from '../_dialog/landpads-dialog.component';
import { DialogType, LandPadsImageURL, ValueType } from '../landpads.constant';
import { DashboardType, LandpadsNameType, LaunchesType } from '../landpads-dashboard.interface';

@Component({
  selector: 'app-launches-details',
  templateUrl: './launches-details.component.html',
})
export class LaunchesDetailsComponent implements OnInit {
  public clientId!: string;
  public getLaunchsDetails: LaunchesType[] = [];
  public landPadsImageURL = LandPadsImageURL;
  public valueType = ValueType;
  public landpadName!: LandpadsNameType;

  constructor(
    private landpadsService: LandpadsService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.clientId =
      this.activatedRoute.snapshot.queryParamMap.get('landingPadId')!;
    this.getLandingPadsDetailsById();
  }

  public getLandingPadsDetailsById() {
    this.landpadsService
      .getLandingPadsDetailsById(this.clientId)
      .subscribe((response) => {
        this.landpadName = response.name;
        this.getLaunchName(response);
      });
  }

  public getLaunchName(value: DashboardType) {
    value.launches.map((res: any) => {
      this.landpadsService.getLaunchesDetailsById(res).subscribe((item) => {
        this.getLaunchsDetails.push(item);
      });
    });
  }

  public getlaunchesData(item: string) {
    this.landpadsService
      .getLaunchesDetailsById(item)
      .subscribe((value) => {
        this.openLaunchesDialog(value);
      });
  }

  public openLaunchesDialog(value: LaunchesType) {
    this.dialog.open(LandpadsDialogComponent, {
      height: `${DialogType.height}px`,
      width: `${DialogType.width}px`,
      data: {
        buttonText: {
          cancel: DialogType.closeButtonText,
        },
        launchesDetails: [...[value]],
      },
    });
  }
}
