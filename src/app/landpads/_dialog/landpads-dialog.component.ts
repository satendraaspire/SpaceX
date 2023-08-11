import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LandpadsService } from '../_service/landpads.service';
import { CapsulesImageURL, ValueType } from '../landpads.constant';
import {
  LandPadsOptionsType,
  LaunchesDetails,
} from './landpads-dialog.interface';
import {
  CapsuleType,
  PayloadType,
  ShipType,
} from '../landpads-dashboard.interface';

@Component({
  selector: 'app-landpads-dialog',
  templateUrl: './landpads-dialog.component.html',
  styleUrls: ['./landpads-dialog.component.css'],
})
export class LandpadsDialogComponent implements OnInit {
  public getShipsDetails: ShipType[] = [];
  public getCapsulesDetails: CapsuleType[] = [];
  public getPayloadsDetails: PayloadType[] = [];
  public capsulesImageURL = CapsulesImageURL;
  public valueType = ValueType;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: LandPadsOptionsType,
    public dialogRef: MatDialogRef<LandpadsDialogComponent>,
    private landpadsService: LandpadsService
  ) {}

  public ngOnInit(): void {
    this.getLunchDetails();
  }

  public getLunchDetails() {
    this.data.launchesDetails.map((res) => {
      this.getShipsData(res as unknown as LaunchesDetails);
      this.getCapsulesData(res as unknown as LaunchesDetails);
      this.getPayloadsData(res as unknown as LaunchesDetails);
    });
  }

  public getShipsData(shipData: LaunchesDetails) {
    shipData.ships.map((shipItem: string) => {
      this.landpadsService
        .getShipsDetailsById(shipItem)
        .subscribe((shipData) => {
          this.getShipsDetails.push(shipData);
        });
    });
  }

  public getCapsulesData(capsulesData: LaunchesDetails) {
    capsulesData.capsules.map((capsuleItem: string) => {
      this.landpadsService
        .getCapsulesDetailsById(capsuleItem)
        .subscribe((capsulesData) => {
          this.getCapsulesDetails.push(capsulesData);
        });
    });
  }

  public getPayloadsData(payloadsData: LaunchesDetails) {
    payloadsData.payloads.map((payloadItem: string) => {
      this.landpadsService
        .getPayloadsDetailsById(payloadItem)
        .subscribe((payloadsData) => {
          this.getPayloadsDetails.push(payloadsData);
        });
    });
  }
}
