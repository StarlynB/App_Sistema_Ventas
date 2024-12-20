import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private url:string = `${environment.endpoint}dashboard/`;

  constructor(private http:HttpClient) { }


  resumenDashboard(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.url + 'resumen');
  }
}
