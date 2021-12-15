import { TestBed } from '@angular/core/testing';

import { InspeccionesService } from './inspecciones.service';

describe('InspeccionesService', () => {
  let service: InspeccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspeccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
