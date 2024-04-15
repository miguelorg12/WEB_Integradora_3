import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { SensorIncubadora } from '../Modelos/sensores_incubadoras.model';
@Injectable({
  providedIn: 'root'
})
export class SensoresIncubadorasService {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  private token: string = this.cookie.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  getSensoresIncubadoras(): Observable<SensorIncubadora[]> {
    return this.http.get<SensorIncubadora[]>(`${environment.api_url}/sensoresIncubadoras/list`, { headers: this.headers });
  }

  getSensorIncubadorabyId(id: number): Observable<SensorIncubadora> {
    return this.http.get<SensorIncubadora>(`${environment.api_url}/sensoresIncubadoras/oneSensorIncubadora/${id}`, { headers: this.headers });
  }

  createSensorIncubadora(sensorIncubadora: SensorIncubadora): Observable<SensorIncubadora> {
    return this.http.post<SensorIncubadora>(`${environment.api_url}/sensoresIncubadoras/create`, sensorIncubadora, { headers: this.headers });
  }

  updateSensorIncubadora(sensorIncubadora: SensorIncubadora): Observable<SensorIncubadora> {
    return this.http.put<SensorIncubadora>(`${environment.api_url}/sensoresIncubadoras/update/${sensorIncubadora.id}`, sensorIncubadora, { headers: this.headers });
  }
  getValue():any{
    return this.http.get(`${environment.api_url}/values`, { headers: this.headers });
  }
  deleteSensorIncubadora(id: number): Observable<SensorIncubadora> {
    return this.http.delete<SensorIncubadora>(`${environment.api_url}/sensoresIncubadoras/delete/${id}`, { headers: this.headers });
  }
}
