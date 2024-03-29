import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';
import { Usuario } from '../Modelos/usuario.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  login(userData:{ email: string; password: string; }){
    return this.http.post(`${environment.api_url}/auth/login`, userData);
  }
  register(userData:Usuario){
    return this.http.post(`${environment.api_url}/auth/register`, userData);
  }
  recoveryPassword(email:string){
    return this.http.post(`${environment.api_url}/auth/password-recovery`, {email});
  }
  logCode(email:string){
    return this.http.post(`${environment.api_url}/auth/logCode`, {email});
  }
  codeVerificacion(code:string){
    return this.http.post(`${environment.api_url}/auth/verifyCode`, {code});
  }
  checkAcountActive(userId:number){
    return this.http.get(`${environment.api_url}/auth/checkActive/${userId}`);
  }
  verifyToken(){
    let email = this.cookie.get('email');
    let role = this.cookie.get('role');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get('token'));
    return this.http.post(`${environment.api_url}/auth/verifyToken`, {email, role}, {headers});
  }
  logout(){
    return this.http.post(`${environment.api_url}/auth/logout`, {});
  }
  me(): Observable<any>{
    return this.http.post(`${environment.api_url}/auth/me`, {headers: this.headers});
  }

  private token : string = this.cookie.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
  
  constructor(private http: HttpClient, private cookie : CookieService) {
  }
  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.api_url}/user/list`, {headers: this.headers});
  }
  getUserbyId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.api_url}/user/oneUser/${id}`, {headers: this.headers});
  }
  createUser(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.api_url}/user/create`, user, {headers: this.headers});
  }
  updateUser(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${environment.api_url}/user/update/${user.id}`, user, {headers: this.headers});
  }
  deleteUser(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${environment.api_url}/user/delete/${id}`, {headers: this.headers});
  } 
}
