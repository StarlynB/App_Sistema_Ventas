import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ResponseApi } from '../interfaces/response-api';
import { Login } from '../interfaces/login';
import { Usuario } from '../interfaces/usuario';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string = `${environment.endpoint}usuario/`;
  constructor(private http:HttpClient) { }

  IniciarSeccion(request:Login) : Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.url + "iniciarseccion", request);
  }

  ListaUsuarios(): Observable<ResponseApi>{
    return this.http.get<ResponseApi>(this.url + 'lista').pipe(
      map((response) => response.value)
    );
  }

  AgregarUsuario(request: Usuario): Observable<ResponseApi>{
    return this.http.post<ResponseApi>(this.url + 'guardar', request);
  }


  EditarUsuario(request:Usuario): Observable<ResponseApi>{
    return this.http.put<ResponseApi>(this.url + 'editar', request);
  }

  EliminarUsuario(id:number): Observable<ResponseApi>{
    return this.http.delete<ResponseApi>(this.url + `eliminar/${id}`)
  }


}
 