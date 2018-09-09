import { TestBed, inject } from '@angular/core/testing';

import { StocklistresolverService } from './stocklistresolver.service';

describe('StocklistresolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StocklistresolverService]
    });
  });

  it('should be created', inject([StocklistresolverService], (service: StocklistresolverService) => {
    expect(service).toBeTruthy();
  }));
});
