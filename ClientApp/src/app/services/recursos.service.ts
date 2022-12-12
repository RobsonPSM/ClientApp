import { Recursos } from './../models/Recursos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('TokeUsuarioLogado')}`,
    }),
};

@Injectable({
  providedIn: 'root'
})

export class RecursosService {

  url = environment.apiServer + 'api/Recurso';

  constructor(private https: HttpClient) { }

  ObterTodos() : Observable<Recursos[]>
  {
    return this.https.get<Recursos[]>(this.url, httpOptions);
  }

}
