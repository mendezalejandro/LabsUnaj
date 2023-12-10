import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/core/modules/material.module';

TestBed.configureTestingModule({
  imports: [HttpClientTestingModule, MaterialModule],
  // Agrega otros módulos o configuraciones comunes
});