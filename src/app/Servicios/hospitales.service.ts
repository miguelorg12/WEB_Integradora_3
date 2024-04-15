import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { Hospital } from '../Modelos/hospital.model';
@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  constructor(private http:HttpClient, private cookie : CookieService) { }
  private token : string = this.cookie.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  getHospitalesNtoken(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(`${environment.api_url}/hospital/listNtoken`);
  }
  getHospitales(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(`${environment.api_url}/hospital/list`, {headers: this.headers});
  }

  getHospitalbyId(id: number): Observable<Hospital> {
    return this.http.get<Hospital>(`${environment.api_url}/hospital/oneHospital/${id}`, {headers: this.headers});
  }

  createHospital(hospital: Hospital) : Observable<Hospital> {
    return this.http.post<Hospital>(`${environment.api_url}/hospital/create`, hospital, {headers: this.headers});
  }

  updateHospital(hospital: Hospital, id:number) : Observable<Hospital>{
    return this.http.put<Hospital>(`${environment.api_url}/hospital/update/${id}`, hospital, {headers: this.headers});
  }

  deleteHospital(id: number) : Observable<Hospital>{
    return this.http.delete<Hospital>(`${environment.api_url}/hospital/delete/${id}`, {headers: this.headers});
  }
}
