import { TestBed, inject } from '@angular/core/testing';

import { SenatorSearchService } from './senator-search.service';

describe('SenatorSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SenatorSearchService]
    });
  });

  it('should ...', inject([SenatorSearchService], (service: SenatorSearchService) => {
    expect(service).toBeTruthy();
  }));
});
