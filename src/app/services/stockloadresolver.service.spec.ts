import { TestBed, inject } from '@angular/core/testing';

import { StockloadresolverService } from './stockloadresolver.service';

describe('StockloadresolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockloadresolverService]
    });
  });

  it('should be created', inject([StockloadresolverService], (service: StockloadresolverService) => {
    expect(service).toBeTruthy();
  }));
});
