import { TestBed } from '@angular/core/testing';

import { LaboratorioService } from './laboratorio.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LaboratorioService', () => {
  let service: LaboratorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LaboratorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
