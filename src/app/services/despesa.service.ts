import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Despesa } from '../models/despesa';



@Injectable({
  providedIn: 'root',
})
export class DespesaService {
  constructor(private httpClient: HttpClient) {}

  private readonly baseUrl = environment['endPoint'];

  AdicionarDespesa(despesa: Despesa) {
    return this.httpClient.post<Despesa>(
      `${this.baseUrl}/AdicionarDespesa`,
      despesa
    );
  }






}
