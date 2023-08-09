import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dragonsAPI } from 'src/app/publicAPI.constant';
import { DragonType } from '../dragon-dashboard.interface';

@Injectable({
  providedIn: 'root',
})
export class DragonService {
  constructor(private http: HttpClient) {}

  public getAllDragons(): Observable<DragonType[]> {
    return this.http.get<DragonType[]>(dragonsAPI);
  }
}
