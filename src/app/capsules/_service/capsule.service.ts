import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CapsuleService {
  constructor(private http: HttpClient) {}

  public getAllCapsules(): Observable<any> {
    return this.http.get('https://api.spacexdata.com/v4/capsules');
  }
}
