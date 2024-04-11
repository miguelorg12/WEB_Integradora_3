import { Component, AfterContentInit } from '@angular/core';
import { SideToolComponent } from '../../../General/side-tool/side-tool.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactoService } from '../../../Servicios/contacto.service';
import { Contacto } from '../../../Modelos/contacto.model';
import { DeleteComponent } from '../../../General/ModalesConfirmacion/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [SideToolComponent, MatIconModule, RouterLink, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements AfterContentInit {
  contactos : Contacto[] = [];
  backendErrors: any = {};
  succesMessages: any = {};
  constructor(private contactoService: ContactoService, private router: Router,
  private dialog: MatDialog) { }
  ngAfterContentInit(): void {
    this.contactoService.getContactos().subscribe({
      next: (response: any) => {
        console.log(response);
        this.contactos = response.data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  delete(id: number){
    const dialogRef = this.dialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.contactoService.deleteContacto(id).subscribe({
          next: (response: any) => {
            console.log(response);
            this.succesMessages.message = 'Contacto eliminado exitosamente';
            setTimeout(() => {
              this.succesMessages.message = '';
              this.router.navigate(['/contacto']);
            }, 3000);
            this.contactos = this.contactos.filter((contacto) => contacto.id !== id);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      }
    });
  }
}
