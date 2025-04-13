import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFeriado } from '../interface/IFeriado';

@Injectable({
  providedIn: 'root'
})
export class CarregaFeriadoService {
  private readonly api = 'https://brasilapi.com.br/api/feriados/v1'

constructor(
  private readonly httpClient: HttpClient
) { }

carregaFeriado(): Observable<IFeriado[]>{
  const url = `${this.api}/2025`
  return this.httpClient.get<IFeriado[]>(url)
}
}
