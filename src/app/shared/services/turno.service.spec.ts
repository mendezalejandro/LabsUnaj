import { TestBed } from '@angular/core/testing';
import { TurnoService } from './turno.service';
import { TestModule } from 'src/app/core/modules/test.module';

describe('TurnoService', () => {
  let service: TurnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
    });
    service = TestBed.inject(TurnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
