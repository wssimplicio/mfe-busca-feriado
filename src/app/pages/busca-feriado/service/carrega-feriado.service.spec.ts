/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarregaFeriadoService } from './carrega-feriado.service';

describe('Service: CarregaFeriado', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarregaFeriadoService]
    });
  });

  it('should ...', inject([CarregaFeriadoService], (service: CarregaFeriadoService) => {
    expect(service).toBeTruthy();
  }));
});
