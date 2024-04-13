import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { Bebe } from '../Modelos/bebes.model';
@Injectable({
  providedIn: 'root'
})
export class BebesService {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  private token: string = this.cookie.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  getBebes(): Observable<Bebe[]> {
    return this.http.get<Bebe[]>(`${environment.api_url}/bebes/list`, { headers: this.headers });
  }
  getBebeFull(id: number): Observable<Bebe> {
    return this.http.get<Bebe>(`${environment.api_url}/bebes/bebefull/${id}`, { headers: this.headers });
  }
  getBebebyId(id: number): Observable<Bebe> {
    return this.http.get<Bebe>(`${environment.api_url}/bebes/oneBebe/${id}`, { headers: this.headers });
  }

  createBebe(bebe: Bebe): Observable<Bebe> {
    return this.http.post<Bebe>(`${environment.api_url}/bebes/create`, bebe, { headers: this.headers });
  }

  updateBebe(id:number,bebe: Bebe): Observable<Bebe> {
    return this.http.put<Bebe>(`${environment.api_url}/bebes/update/${id}`, bebe, { headers: this.headers });
  }

  deleteBebe(id: number): Observable<Bebe> {
    return this.http.delete<Bebe>(`${environment.api_url}/bebes/delete/${id}`, { headers: this.headers });
  }
}
