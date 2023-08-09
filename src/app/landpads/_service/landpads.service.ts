import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  capsulesAPI,
  landpadsAPI,
  launchesAPI,
  payloadsAPI,
  shipsAPI,
} from 'src/app/publicAPI.constant';
import {
  CapsuleType,
  DashboardType,
  LaunchesType,
  PayloadType,
  ShipType,
} from '../landpads-dashboard.interface';

@Injectable({
  providedIn: 'root',
})
export class LandpadsService {
  constructor(private http: HttpClient) {}

  public getAllLandingPads(): Observable<DashboardType[]> {
    return this.http.get<DashboardType[]>(landpadsAPI);
  }

  public getLandingPadsDetailsById(id: string): Observable<DashboardType[]> {
    return this.http.get<DashboardType[]>(`${landpadsAPI}/${id}`);
  }

  public getLaunchesDetailsById(id: string): Observable<LaunchesType[]> {
    return this.http.get<LaunchesType[]>(`${launchesAPI}/${id}`);
  }

  public getShipsDetailsById(id: string): Observable<ShipType[]> {
    return this.http.get<ShipType[]>(`${shipsAPI}/${id}`);
  }

  public getCapsulesDetailsById(id: string): Observable<CapsuleType[]> {
    return this.http.get<CapsuleType[]>(`${capsulesAPI}/${id}`);
  }

  public getPayloadsDetailsById(id: string): Observable<PayloadType[]> {
    return this.http.get<PayloadType[]>(`${payloadsAPI}/${id}`);
  }
}
