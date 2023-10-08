import { TestBed } from '@angular/core/testing';

import { IsoDateService } from './iso-date.service';

describe('IsoDateService', () => {
  let service: IsoDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsoDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
