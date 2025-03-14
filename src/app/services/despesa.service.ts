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

  ListarDespesaUsuario(emailUsuario: string) {
    return this.httpClient.get(
      `${this.baseUrl}/ListarDespesaUsuario?emailUsuario=${emailUsuario}`
    );
  }

  ObterDespesa(id: number) {
    return this.httpClient.get(`${this.baseUrl}/ObterDespesa?id=${id}`);
  }

  AtualizarDespesa(despesa: Despesa) {
    return this.httpClient.put<Despesa>(
      `${this.baseUrl}/AtualizarDespesa`,
      despesa
    );
  }
}
