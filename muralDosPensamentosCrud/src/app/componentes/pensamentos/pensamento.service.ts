import { Injectable } from '@angular/core';

@Injectable({
  // providedIn, quer dizer que ele pode ser disponibilizado em toda a aplicação, este serviço, porque esta como root, está visivel em toda a aplicação
  providedIn: 'root'
})
export class PensamentoService {

  constructor() { }
}
