import { Component, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideToolComponent } from '../../../General/side-tool/side-tool.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../../Servicios/usuario.service';
import { Usuario } from '../../../Modelos/usuario.model';
import { DeleteComponent } from '../../../General/ModalesConfirmacion/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [SideToolComponent, MatIconModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements AfterContentInit {
  usuarios : Usuario[] = [];
  successMessage : any = {};
  constructor(private usuarioService : UsuarioService, private dialog: MatDialog,
    private router : Router){}
  ngAfterContentInit(): void {
    this.usuarioService.getUsers().subscribe({
      next: (response: any) => {
        this.usuarios = response.data;
        console.log(this.usuarios);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  delete(id:number){
    const dialogRef = this.dialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.usuarioService.deleteUser(id).subscribe({
          next: (response: any) => {
            console.log(response);
            
            this.successMessage.message = 'Usuario eliminado exitosamente';
            setTimeout(() => {
              this.successMessage.message = '';
              this.router.navigate(['/usuarios']);
            }, 3000);
            this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      }
    });
  }
  
}
