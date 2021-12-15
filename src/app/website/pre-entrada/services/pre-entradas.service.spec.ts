import { TestBed } from '@angular/core/testing';

import { PreEntradasService } from './pre-entradas.service';

describe('PreEntradasService', () => {
  let service: PreEntradasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreEntradasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
