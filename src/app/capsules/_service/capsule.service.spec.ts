import { TestBed } from '@angular/core/testing';

import { CapsuleService } from './capsule.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MockService } from 'ng-mocks';
import { qureyData } from 'src/app/dragon/dragon-dashboard.constant';

describe('CapsuleService', () => {
  let service: CapsuleService;

  beforeEach(() => {
    const MockServiceSub = () => ({
      post: (_arg: any, _array: any, _data: any) => ({}),
    });

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        CapsuleService,
        { provide: MockService, useFactory: MockServiceSub },
      ],
    });
    service = TestBed.inject(CapsuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when calls getCapsulesDetailsWithQuery', () => {
    it('should calls getCapsulesDetailsWithQuery.post', () => {
      const MockServiceSub = TestBed.inject(MockService);
      spyOn(MockServiceSub, 'post').and.callThrough();
      spyOn(service, 'getCapsulesDetailsWithQuery').and.callThrough();
      service.getCapsulesDetailsWithQuery(qureyData);
      expect(service.getCapsulesDetailsWithQuery).toHaveBeenCalled();
    });
  });
});
