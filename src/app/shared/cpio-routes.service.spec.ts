import { TestBed } from '@angular/core/testing';

import { CpioRoutesService } from './cpio-routes.service';

describe('CpioRoutesService', () => {
  let service: CpioRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpioRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
