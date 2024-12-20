import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private url:string = `${environment.endpoint}menu/`;

  constructor(private http:HttpClient) { }

  menuList(id:number): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.url + `${id}`).pipe(
      map((response) => response.value)
    )
  }
}
