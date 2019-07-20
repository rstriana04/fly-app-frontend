import { TestBed } from '@angular/core/testing';

import { AirplanesService } from './airplanes.service';

describe('AirplanesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirplanesService = TestBed.get(AirplanesService);
    expect(service).toBeTruthy();
  });
});
