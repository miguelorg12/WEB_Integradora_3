import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';
import { Incubadora } from '../Modelos/incubadoras.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IncubadorasService {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  private token : string = this.cookie.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  getIncubadoras(): Observable<Incubadora[]> {
    return this.http.get<Incubadora[]>(`${environment.api_url}/incubadora/list`, {headers: this.headers});
  }

  getIncubadorasconHospitals(): Observable<Incubadora[]> {
    return this.http.get<Incubadora[]>(`${environment.api_url}/incubadora/incubadoras`, {headers: this.headers});
  
  }

  getIncubadorabyId(id: number): Observable<Incubadora>{
    return this.http.get<Incubadora>(`${environment.api_url}/incubadora/oneIncubadora/${id}`, {headers: this.headers});
  }
  getIncubadorasDisponibles(): Observable<Incubadora[]>{
    return this.http.get<Incubadora[]>(`${environment.api_url}/incubadora/incubadorasDisponibles`, {headers: this.headers});
  }

  createIncubadora(incubadora: Incubadora) : Observable<Incubadora>{
    return this.http.post<Incubadora>(`${environment.api_url}/incubadora/create`, incubadora, {headers: this.headers});
  }

  updateIncubadora(incubadora: Incubadora): Observable<Incubadora> {
    return this.http.put<Incubadora>(`${environment.api_url}/incubadora/update/${incubadora.id}`, incubadora, {headers: this.headers});
  }

  deleteIncubadora(id: number) : Observable<Incubadora>{
    return this.http.delete<Incubadora>(`${environment.api_url}/incubadora/delete/${id}`, {headers: this.headers});
  }

}
