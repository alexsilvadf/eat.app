import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { SistemaFinanceiro } from '../models/sistemaFinanceiro';

@Injectable({
  providedIn: 'root',
})
export class SistemaService {
  constructor(private httpClient: HttpClient) {}

  private readonly baseUrl = environment['endPoint'];

  AdicionarSistemaFinanceiro(sistemaFinanceiro: SistemaFinanceiro) {
    return this.httpClient.post<SistemaFinanceiro>(
      `${this.baseUrl}/AdicionarSistemaFinanceiro`,
      sistemaFinanceiro
    );
  }

  ListSistemasUsuario(emailUsuario: string) {
    return this.httpClient.get(`${this.baseUrl}/ListSistemasUsuario?emailUsuario=${emailUsuario}`);
  }

  CadastrarUsuarioSistema(idSistema: number, emailUsuario: string) {
    return this.httpClient.post<SistemaFinanceiro>(
      `${this.baseUrl}/CadastrarUsuarioSistema?idSistema=${idSistema}&emailUsuario=${emailUsuario}`, null);
  }


}
