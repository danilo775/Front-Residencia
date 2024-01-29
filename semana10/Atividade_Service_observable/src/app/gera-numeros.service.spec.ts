import { TestBed } from '@angular/core/testing';

import { GeraNumerosService } from './gera-numeros.service';

describe('GeraNumerosService', () => {
  let service: GeraNumerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeraNumerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
