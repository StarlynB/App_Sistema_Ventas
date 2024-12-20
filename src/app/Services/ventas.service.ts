import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ResponseApi } from '../interfaces/response-api';
import { Venta } from '../interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private url:string = `${environment.endpoint}ventas/`;

  constructor(private http:HttpClient) { }

  RegistrarVenta(request:Venta) : Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.url + 'registrar', request);
  }

  historialVentas(buscarPor:string, numeroVenta:string, fechaInicio: string, fechaFin:string ): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.url + `historial?buscarPor=${buscarPor}&numeroVenta=${numeroVenta}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`)
  }

  ReportesVentas(fechaInicio: string, fechaFin:string ): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.url + `historial?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`)
  }
}
