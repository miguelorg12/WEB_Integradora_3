import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { EstadoBebe } from '../Modelos/estadobebe.model';
@Injectable({
  providedIn: 'root'
})
export class EstadoBebeService {

  constructor(private http:HttpClient, private cookies:CookieService) { }
  private token : string = this.cookies.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  getEstadosBebe(): Observable<EstadoBebe[]> {
    return this.http.get<EstadoBebe[]>(`${environment.api_url}/estadoDelBebe/list`, {headers: this.headers});
  }

  getEstadoBebebyId(id: number): Observable<EstadoBebe> {
    return this.http.get<EstadoBebe>(`${environment.api_url}/estadoDelBebe/oneEstadoDelBebe/${id}`, {headers: this.headers});
  }

  createEstadoBebe(estadoBebe: EstadoBebe) : Observable<EstadoBebe> {
    return this.http.post<EstadoBebe>(`${environment.api_url}/estadoDelBebe/create`, estadoBebe, {headers: this.headers});
  }

  updateEstadoBebe(estadoBebe: EstadoBebe) : Observable<EstadoBebe>{
    return this.http.put<EstadoBebe>(`${environment.api_url}/estadoDelBebe/update/${estadoBebe.id}`, estadoBebe, {headers: this.headers});
  }

  deleteEstadoBebe(id: number) : Observable<EstadoBebe>{
    return this.http.delete<EstadoBebe>(`${environment.api_url}/estadoDelBebe/delete/${id}`, {headers: this.headers});
  }
}
