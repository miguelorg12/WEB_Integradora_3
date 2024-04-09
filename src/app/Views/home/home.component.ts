import { Component, OnInit } from '@angular/core';
import { SideToolComponent } from '../../General/side-tool/side-tool.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideToolComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      state('out', style({ opacity: 0 })),
      state('in', style({ opacity: 1 })),
      transition('out => in', animate('1000ms ease-in')),
      transition('in => out', animate('1000ms ease-out'))
    ]),
  ],
})
export class HomeComponent implements OnInit{
  isLoaded = false;
  rol_id = 0;
  constructor(private cookie: CookieService) { }
  ngOnInit() {
    this.rol_id = Number(this.cookie.get('id_rol'));
    setTimeout(() => {
      this.isLoaded = true;
    }, 0);
  }

}
