import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { Rol } from '../Modelos/roles.model';
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient, private cookie:CookieService) { }
  private token : string = this.cookie.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${environment.api_url}/roles/list`, {headers: this.headers});
  }

  getRolbyId(id: number): Observable<Rol> {
    return this.http.get<Rol>(`${environment.api_url}/roles/oneRol/${id}`, {headers: this.headers});
  }

  createRol(rol: Rol) : Observable<Rol> {
    return this.http.post<Rol>(`${environment.api_url}/roles/create`, rol, {headers: this.headers});
  }

  updateRol(rol: Rol) : Observable<Rol>{
    return this.http.put<Rol>(`${environment.api_url}/roles/update/${rol.id}`, rol, {headers: this.headers});
  }

  deleteRol(id: number) : Observable<Rol>{
    return this.http.delete<Rol>(`${environment.api_url}/roles/delete/${id}`, {headers: this.headers});
  }
}
