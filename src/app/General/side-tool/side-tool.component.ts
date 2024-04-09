import { Component, AfterContentInit } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../Servicios/usuario.service';
import { Usuario } from '../../Modelos/usuario.model';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-side-tool',
  standalone: true,
  imports: [MatToolbarModule, 
            MatIconModule, 
            MatButtonModule, 
            MatSidenavModule, 
            MatListModule, 
            RouterLink, 
            RouterOutlet,
            CommonModule,
            ],
  templateUrl: './side-tool.component.html',
  styleUrl: './side-tool.component.css'
})
export class SideToolComponent implements AfterContentInit {
  usuario : Usuario = {} as Usuario;
  nombre = '';
  rol_user = 0;
  constructor(private usuarioService: UsuarioService, private cookie: CookieService,
    private router : Router) { }

  ngAfterContentInit(): void {
    this.rol_user = parseInt(this.cookie.get('id_rol'));
    this.nombre = this.cookie.get('nombre');
    if(this.nombre === '' || this.nombre === null || this.nombre === undefined){
    this.usuarioService.me().subscribe({
      next: (response: any) => {
        this.cookie.set('nombre', response.name, 1);
        this.cookie.set('id' , response.id.toString(), 1);
        this.cookie.set('apellido', response.last_name, 1);
        this.cookie.set('id_hospital', response.id_hospital.toString(), 1);
        this.nombre = response.name;
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}

  logout(){
    this.usuarioService.logout().subscribe({
      next: (response: any) => {
        this.cookie.deleteAll();
        this.router.navigate(['/login']);
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
