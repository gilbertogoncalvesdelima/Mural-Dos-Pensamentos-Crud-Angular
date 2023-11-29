import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

// @Injectable, ela é uma classe injetada, que no caso e injeção de dependencia
@Injectable({
  // providedIn, quer dizer que ele pode ser disponibilizado em toda a aplicação, este serviço, porque esta como root, está visivel em toda a aplicação
  providedIn: 'root'
})
export class PensamentoService {


  //Agora temos acesso a todos os metodos do HttpClient
  constructor(private http: HttpClient) { }

  //Metodo de listagem
  private readonly API = "http://localhost:3000/pensamento"

  //Observable irá, ficar observando
  listar(): Observable<Pensamento[]> {

  //Trazendo a lista de pensamentos que está na API
  return this.http.get<Pensamento[]>(this.API)
  }
  // Criar Pensamento
  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }
  // Editar Pensamento
  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }
  //Excluir pensamento
  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }
  // Buscar Pensamento
  buscarPorId(id: number): Observable<Pensamento> {
  const url = `${this.API}/${id}`
  return this.http.get<Pensamento>(url)
}
}
