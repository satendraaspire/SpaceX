import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { capsulesAPI } from 'src/app/publicAPI.constant';
import { CapsuleType } from '../capsule-dashboard.interface';

@Injectable({
  providedIn: 'root',
})
export class CapsuleService {
  constructor(private http: HttpClient) {}

  public getAllCapsules(): Observable<CapsuleType[]> {
    return this.http.get<CapsuleType[]>(capsulesAPI);
  }
}
