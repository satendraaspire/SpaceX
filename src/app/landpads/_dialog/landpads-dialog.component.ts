import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LandpadsService } from '../_service/landpads.service';
import { CapsulesImageURL, ValueType } from '../landpads.constant';
import { LandPadsOptionsType } from './landpads-dialog.interface';

@Component({
  selector: 'app-landpads-dialog',
  templateUrl: './landpads-dialog.component.html',
  styleUrls: ['./landpads-dialog.component.css'],
})
export class LandpadsDialogComponent implements OnInit {
  public getShipsDetails: any[] = [];
  public getCapsulesDetails: any[] = [];
  public getPayloadsDetails: any[] = [];
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
    this.data.linkedClient.map((res) => {
      this.getShipsData(res);
      this.getCapsulesData(res);
      this.getPayloadsData(res);
    });
  }

  public getShipsData(shipData: any) {
    shipData.ships.map((shipItem: string) => {
      this.landpadsService
        .getShipsDetailsById(shipItem)
        .subscribe((shipData) => {
          this.getShipsDetails.push(shipData);
        });
    });
  }

  public getCapsulesData(capsulesData: any) {
    capsulesData.capsules.map((capsuleItem: string) => {
      this.landpadsService
        .getCapsulesDetailsById(capsuleItem)
        .subscribe((capsulesData) => {
          this.getCapsulesDetails.push(capsulesData);
        });
    });
  }

  public getPayloadsData(payloadsData: any) {
    payloadsData.payloads.map((payloadItem: string) => {
      this.landpadsService
        .getPayloadsDetailsById(payloadItem)
        .subscribe((payloadsData) => {
          this.getPayloadsDetails.push(payloadsData);
        });
    });
  }
}
