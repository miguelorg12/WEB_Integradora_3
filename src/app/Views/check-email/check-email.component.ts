import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { UsuarioService } from '../../Servicios/usuario.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-check-email',
  standalone: true,
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class CheckEmailComponent implements OnInit {
  private subscription: Subscription = new Subscription();

  constructor(
    private userService: UsuarioService,
    private router: Router,
    private cookie: CookieService
  ) {}

  ngOnInit() {
    const userId = Number(this.cookie.get('id'));
    if (userId) {
      this.subscription = interval(5000).subscribe(() => {
        this.userService.checkAcountActive(userId).subscribe({
          next: (response: any) => {
            console.log(response)
            if(response.active){
              this.router.navigate(['/login']);
              this.cookie.delete('id');
              this.subscription.unsubscribe();
            }
            else{
              console.log('Usuario no activo');
            }
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      });
    }
  }
}