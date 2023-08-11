import { TestBed } from '@angular/core/testing';

import { DragonService } from './dragon.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { qureyData } from '../dragon-dashboard.constant';
import { MockService } from 'ng-mocks';

describe('DragonService', () => {
  let service: DragonService;

  beforeEach(() => {
    const MockServiceSub = () => ({
      post: (_arg: any, _array: any, _data: any) => ({}),
    });
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        DragonService,
        { provide: MockService, useFactory: MockServiceSub },
      ],
    });
    service = TestBed.inject(DragonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when calls getDragonsDetailsWithQuery', () => {
    it('should calls getDragonsDetailsWithQuery.post', () => {
      const MockServiceSub = TestBed.inject(MockService);
      spyOn(MockServiceSub, 'post').and.callThrough();
      spyOn(service, 'getDragonsDetailsWithQuery').and.callThrough();
      service.getDragonsDetailsWithQuery(qureyData);
      expect(service.getDragonsDetailsWithQuery).toHaveBeenCalled();
    });
  });
});
