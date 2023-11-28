import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';

@Injectable({
  // providedIn, quer dizer que ele pode ser disponibilizado em toda a aplicação, este serviço, porque esta como root, está visivel em toda a aplicação
  providedIn: 'root'
})
export class PensamentoService {


  //Agora temos acesso a todos os metodos do HttpClient
  constructor(private http: HttpClient) { }

  //Metodo de listagem
  private readonly API = "http://localhost:3000/pensamento"

  listar() {
  //Trazendo a lista de pensamentos que está na API
  return this.http.get<Pensamento[]>(this.API)
  }
}
