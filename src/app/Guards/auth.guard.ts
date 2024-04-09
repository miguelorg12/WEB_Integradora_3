import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioService } from '../Servicios/usuario.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private cookie: CookieService, private usuarioService: UsuarioService,
    private router : Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const token = this.cookie.get('token');
    if(token) {
      return this.usuarioService.verifyToken().pipe(
        map((response: any) => {
          if(response.valid && response.active){
            return true;
          }
          else {
            this.router.navigate(['/login']);
            this.cookie.deleteAll();
            return false;
          }
        })
      );
    }
    this.router.navigate(['/login']);
    return of(false);
  } 
  
}