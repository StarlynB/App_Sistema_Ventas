import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ResponseApi } from '../interfaces/response-api';


@Injectable({
  providedIn: 'root'
})
export class RolService {

  private url:string = `${environment.endpoint}rol/`;

  constructor(private http:HttpClient) { }

  ListaRol(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.url + 'lista').pipe(
      map((response) => response.value)
    )
  }
}
