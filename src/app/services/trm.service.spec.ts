import { TestBed, inject } from '@angular/core/testing';

import { TrmService } from './trm.service';

describe('TrmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrmService]
    });
  });

  it('should be created', inject([TrmService], (service: TrmService) => {
    expect(service).toBeTruthy();
  }));
});
