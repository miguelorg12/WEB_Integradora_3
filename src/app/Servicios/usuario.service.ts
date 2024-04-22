import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';
import { Usuario } from '../Modelos/usuario.model';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  register(userData:Usuario){
    return this.http.post(`${environment.api_url}/auth/register`, userData);
  }
  recoveryPassword(email:string){
    return this.http.post(`${environment.api_url}/auth/restablecer`, {email});
  }
  logCode(email:string, password:string){
    return this.http.post(`${environment.api_url}/auth/logCode`, {email, password});
  }
  codeVerificacion(codigo:string, email:string, password:string){
    return this.http.post(`${environment.api_url}/auth/verifyCode`, {codigo, email, password});
  }
  checkAcountActive(userId:number){
    return this.http.get(`${environment.api_url}/auth/checkActive/${userId}`);
  }
  verifyToken(){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get('token'));
    return this.http.post(`${environment.api_url}/auth/verifyToken`, {headers});
  }
  logout(){
    return this.http.post(`${environment.api_url}/auth/logout`, {});
  }

  private token : string = this.cookie.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
  
  constructor(private http: HttpClient, private cookie : CookieService) {
  }
  me(): Observable<any>{
    return this.http.post(`${environment.api_url}/auth/me`, {headers: this.headers});
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
  updateUser(user: Usuario, id: number): Observable<Usuario> {
    return this.http.put<Usuario>(`${environment.api_url}/user/update/${id}`, user, {headers: this.headers});
  }
  deleteUser(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${environment.api_url}/user/delete/${id}`, {headers: this.headers});
  } 

  getRole(): Observable<any> {
    return this.http.get(`${environment.api_url}/user/getRole`, { headers: this.headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error getting role:', error);
        return throwError(() => new Error('Error getting role'));
      })
    );
  }

}
