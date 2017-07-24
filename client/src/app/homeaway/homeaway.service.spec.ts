import { TestBed, inject } from '@angular/core/testing';

import { HomeawayService } from './homeaway.service';

describe('HomeawayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeawayService]
    });
  });

  it('should be created', inject([HomeawayService], (service: HomeawayService) => {
    expect(service).toBeTruthy();
  }));
});
