import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { Historial } from '../Modelos/historial.model';
@Injectable({
  providedIn: 'root'
})
export class HistorialService {



  constructor(private http: HttpClient, private cookies: CookieService) { }
  private token: string = this.cookies.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  getHistoriales(): Observable<Historial[]> {
    return this.http.get<Historial[]>(`${environment.api_url}/historial/list`, { headers: this.headers });
  }

  getHistorialbyId(id: number): Observable<Historial> {
    return this.http.get<Historial>(`${environment.api_url}/historial/oneHistorial/${id}`, { headers: this.headers });
  }

  createHistorial(historial: Historial): Observable<Historial> {
    return this.http.post<Historial>(`${environment.api_url}/historial/create`, historial, { headers: this.headers });
  }

  updateHistorial(historial: Historial, id:number): Observable<Historial> {
    return this.http.put<Historial>(`${environment.api_url}/historial/update/${id}`, historial, { headers: this.headers });
  }

  deleteHistorial(id: number): Observable<Historial> {
    return this.http.delete<Historial>(`${environment.api_url}/historial/delete/${id}`, { headers: this.headers });
  }


}
