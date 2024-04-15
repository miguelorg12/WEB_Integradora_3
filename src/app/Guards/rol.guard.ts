import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsuarioService } from '../Servicios/usuario.service';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  id_rol : any;
  rolanterior : any;
  constructor(private router: Router, private usuarioService : UsuarioService,
    private cookie: CookieService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.usuarioService.getRole().pipe(
      map((response: any) => {
        const requiredRoles = next.data['role'];  
        this.id_rol = this.cookie.get('id_rol');
        this.rolanterior = response.role;
        if (this.id_rol != this.rolanterior || this.id_rol == null) {
          this.cookie.set('id_rol', response.role.toString(), 1);
        }
        const roleMapping: { [key: number]: string } = {
          1: 'Developer',
          2: 'Administrador',
          3: 'Doctor',
          4: 'Enfermera',
          5: 'Invitado'
        };
        const userRole = roleMapping[response.role];
        if (requiredRoles.includes(userRole)) {
          return true;
        } else {
          console.error('Access denied - Invalid role');
          this.router.navigate(['/bienvenido']);
          return false;
        }
      }),
      catchError((error: any) => {
        console.error('Error getting role:', error);
        this.router.navigate(['/bienvenido']);
        return of(false);
      })
    );
  }
}