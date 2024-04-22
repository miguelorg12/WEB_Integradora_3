import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class SocketUpdateUserServiceService {
  private user_id: number;
  private id_rol : number;

  constructor(private router: Router, private cookieService: CookieService,
    private route: ActivatedRoute
  ) { 
    this.user_id = Number(this.cookieService.get('id'));
    this.id_rol = Number(this.cookieService.get('id_rol'));

    (window as any).Pusher = Pusher;
    (window as any).Echo = new Echo({
      broadcaster: 'pusher',
      key: 'askjsdak',
      cluster: 'mt1',
      wsHost: '34.227.197.144',
      wsPort: 6001,
      forceTLS: false,
      disableStatus: true,
    }); 
    (window as any).Echo.channel('UserUpdate')
    .listen('.UpdateUser', (data: any) => {
      console.log(data);
      console.log(this.user_id);
      console.log(this.id_rol);
      if(this.user_id === data.user_id && !data.user_status){
        this.router.navigate(['/login']);
        this.cookieService.deleteAll();
      }
      else if(this.user_id === data.user_id && this.id_rol !== data.id_rol){
        if (this.router.url === '/home') {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
        }
        this.router.navigate(['/home']);
        this.cookieService.delete('id_rol');
        this.cookieService.set('id_rol', data.id_rol);
      }
    });


  }
}
