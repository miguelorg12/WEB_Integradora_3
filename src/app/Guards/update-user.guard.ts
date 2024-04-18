import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SocketUpdateUserServiceService } from '../Servicios/socket-update-user-service.service';
@Injectable({
  providedIn: 'root'
})
export class UserUpdate implements CanActivate {
  constructor(
    private socketUpdateUserService: SocketUpdateUserServiceService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return true;
  }
}