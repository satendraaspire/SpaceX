import { TestBed } from '@angular/core/testing';

import { LandpadsService } from './landpads.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MockService } from 'ng-mocks';

describe('LandpadsService', () => {
  let service: LandpadsService;

  beforeEach(() => {
    const MockServiceSub = () => ({
      get: (_arg: any, _array: any, _data: any) => ({}),
    });

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        LandpadsService,
        { provide: MockService, useFactory: MockServiceSub },
      ],
    });
    service = TestBed.inject(LandpadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when calls getAllLandingPads', () => {
    it('should calls getAllLandingPads.get', () => {
      const MockServiceSub = TestBed.inject(MockService);
      spyOn(MockServiceSub, 'get').and.callThrough();
      spyOn(service, 'getAllLandingPads').and.callThrough();
      service.getAllLandingPads();
      expect(service.getAllLandingPads).toHaveBeenCalled();
    });
  });

  describe('when calls getLandingPadsDetailsById', () => {
    it('should calls getLandingPadsDetailsById.get', () => {
      const MockServiceSub = TestBed.inject(MockService);
      spyOn(MockServiceSub, 'get').and.callThrough();
      spyOn(service, 'getLandingPadsDetailsById').and.callThrough();
      service.getLandingPadsDetailsById('5e9e3032383ecb267a34e7c7');
      expect(service.getLandingPadsDetailsById).toHaveBeenCalled();
    });
  });

  describe('when calls getLaunchesDetailsById', () => {
    it('should calls getLaunchesDetailsById.get', () => {
      const MockServiceSub = TestBed.inject(MockService);
      spyOn(MockServiceSub, 'get').and.callThrough();
      spyOn(service, 'getLaunchesDetailsById').and.callThrough();
      service.getLaunchesDetailsById('5eb87cefffd86e000604b342');
      expect(service.getLaunchesDetailsById).toHaveBeenCalled();
    });
  });

  describe('when calls getShipsDetailsById', () => {
    it('should calls getShipsDetailsById.get', () => {
      const MockServiceSub = TestBed.inject(MockService);
      spyOn(MockServiceSub, 'get').and.callThrough();
      spyOn(service, 'getShipsDetailsById').and.callThrough();
      service.getShipsDetailsById('5ea6ed2e080df4000697c906');
      expect(service.getShipsDetailsById).toHaveBeenCalled();
    });
  });

  describe('when calls getCapsulesDetailsById', () => {
    it('should calls getCapsulesDetailsById.get', () => {
      const MockServiceSub = TestBed.inject(MockService);
      spyOn(MockServiceSub, 'get').and.callThrough();
      spyOn(service, 'getCapsulesDetailsById').and.callThrough();
      service.getCapsulesDetailsById('5e9e2c5cf359183bb73b266e');
      expect(service.getCapsulesDetailsById).toHaveBeenCalled();
    });
  });

  describe('when calls getPayloadsDetailsById', () => {
    it('should calls getPayloadsDetailsById.get', () => {
      const MockServiceSub = TestBed.inject(MockService);
      spyOn(MockServiceSub, 'get').and.callThrough();
      spyOn(service, 'getPayloadsDetailsById').and.callThrough();
      service.getPayloadsDetailsById('5eb0e4c0b6c3bb0006eeb205');
      expect(service.getPayloadsDetailsById).toHaveBeenCalled();
    });
  });
});
