import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/publicAPI.constant';
import { DragonType, QueryType } from '../dragon-dashboard.interface';

@Injectable({
  providedIn: 'root',
})
export class DragonService {
  constructor(private http: HttpClient) {}

  public getDragonsDetailsWithQuery(id: QueryType): Observable<DragonType> {
    return this.http.post<DragonType>(API.getDragonQueryData, id);
  }
}
