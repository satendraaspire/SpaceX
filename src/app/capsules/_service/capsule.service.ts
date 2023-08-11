import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/publicAPI.constant';
import { CapsuleType, QueryType } from '../capsule-dashboard.interface';

@Injectable({
  providedIn: 'root',
})
export class CapsuleService {
  constructor(private http: HttpClient) {}

  public getCapsulesDetailsWithQuery(id: QueryType): Observable<CapsuleType> {
    return this.http.post<CapsuleType>(API.getCapsulesQueryData, id);
  }
}
