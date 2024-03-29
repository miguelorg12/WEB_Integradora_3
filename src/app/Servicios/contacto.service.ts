import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { Contacto } from '../Modelos/contacto.model';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http : HttpClient, private cookie : CookieService) { }
  private token : string = this.cookie.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  getContactos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(`${environment.api_url}/contactoFamiliar/list`, {headers: this.headers});
  }
  getContactoById(id: number): Observable<Contacto> {
    return this.http.get<Contacto>(`${environment.api_url}/contactoFamiliar/oneContactoFamiliar/${id}`, {headers: this.headers});
  }
  createContacto(contacto: Contacto) : Observable<Contacto> {
    return this.http.post<Contacto>(`${environment.api_url}/contactoFamiliar/create`, contacto, {headers: this.headers});
  }
  updateContacto(contacto: Contacto) : Observable<Contacto>{
    return this.http.put<Contacto>(`${environment.api_url}/contactoFamiliar/update/${contacto.id}`, contacto, {headers: this.headers});
  }
  deleteContacto(id: number) : Observable<Contacto>{
    return this.http.delete<Contacto>(`${environment.api_url}/contactoFamiliar/delete/${id}`, {headers: this.headers});
  }
}
