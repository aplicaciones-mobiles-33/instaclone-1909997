import { TestBed } from '@angular/core/testing';

import { FotoSerivceService } from './foto-serivce.service';

describe('FotoSerivceService', () => {
  let service: FotoSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotoSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
