import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  listar(pagina: number, filtro: string): Observable<Pensamento[]> {

  const intensPorPagina = 6;
  // HttpParams, ele representa o corpo da requisição com a resposta http, incluindo os paramentros a serem realizados
  // .set, serve para substituir um valor, aonde passamos o nome do parametro e o valor
  let params = new HttpParams()
    .set("_page", pagina)
    .set("_limit", intensPorPagina)

  //  trim, ira remover os espaços vazios desta string
  // Pesquisa
  if(filtro.trim().length > 2) {
    params = params.set("q", filtro)
  }

  //Trazendo a lista de pensamentos que está na API
  //Outro jeito,  return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${intensPorPagina}`)
  // { params: ´params }, quando temos a variavel, com o mesmo nome que esta dentro da chave, podemos omitir e deixar somente o nome params
  return this.http.get<Pensamento[]>(this.API, { params })
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
