import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ResponseApi } from '../interfaces/response-api';
import { Producto } from '../interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url:string = `${environment.endpoint}producto/`;

  constructor(private http:HttpClient) { }

  ListaProductos(): Observable<ResponseApi>{
    return this.http.get<ResponseApi>(this.url + 'lista').pipe(
      map((response) => response.value)
    )
  }

  CrearProducto(request: Producto): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.url + 'crear', request);
  }

  EditarProducto(request: Producto): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(this.url + 'editar', request);
  }

  EliminarProducto(id:number) : Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(this.url + `eliminar/${id}`);
  }
  
}
