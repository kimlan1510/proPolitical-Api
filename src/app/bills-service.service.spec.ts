import { TestBed, inject } from '@angular/core/testing';

import { BillsServiceService } from './bills-service.service';

describe('BillsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillsServiceService]
    });
  });

  it('should ...', inject([BillsServiceService], (service: BillsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
