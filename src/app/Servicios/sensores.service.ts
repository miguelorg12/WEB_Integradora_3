import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { Sensor } from '../Modelos/sensores.model';
@Injectable({
  providedIn: 'root'
})
export class SensoresService {
  constructor(private http: HttpClient, private cookie: CookieService) { }
  private token : string = this.cookie.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  getSensores(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(`${environment.api_url}/sensores/list`, {headers: this.headers});
  }

  getSensorbyId(id: number): Observable<Sensor> {
    return this.http.get<Sensor>(`${environment.api_url}/sensores/oneSensor/${id}`, {headers: this.headers});
  }

  createSensor(sensor: Sensor) : Observable<Sensor> {
    return this.http.post<Sensor>(`${environment.api_url}/sensores/create`, sensor, {headers: this.headers});
  }

  updateSensor(sensor: Sensor, id : number) : Observable<Sensor>{
    return this.http.put<Sensor>(`${environment.api_url}/sensores/update/${id}`, sensor, {headers: this.headers});
  }

  deleteSensor(id: number) : Observable<Sensor>{
    return this.http.delete<Sensor>(`${environment.api_url}/sensores/delete/${id}`, {headers: this.headers});
  }
}
