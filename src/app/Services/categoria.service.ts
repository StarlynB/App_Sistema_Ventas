import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ResponseApi } from '../interfaces/response-api';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url:string = `${environment.endpoint}categoria/`

  constructor(private http:HttpClient) { }

  ListaCategoria(): Observable<ResponseApi>{
    return this.http.get<ResponseApi>(this.url + 'lista').pipe(
      map((response) => response.value)
    );
  }

}
