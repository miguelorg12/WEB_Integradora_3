import { Component, AfterContentInit } from '@angular/core';
import { SideToolComponent } from '../../../General/side-tool/side-tool.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DeleteComponent } from '../../../General/ModalesConfirmacion/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Incubadora } from '../../../Modelos/incubadoras.model';
import { IncubadorasService } from '../../../Servicios/incubadoras.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [SideToolComponent, MatIconModule, RouterLink, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements AfterContentInit {

  incubadoras : Incubadora[] = [];
  successMessage : any = {};
  constructor(private incubadoraService : IncubadorasService, private dialog: MatDialog,
    private router : Router){}
  ngAfterContentInit(): void {
    this.incubadoraService.getIncubadoras().subscribe({
      next: (response: any) => {
        this.incubadoras = response.Incubadoras;
        console.log(this.incubadoras);  
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
        this.incubadoraService.deleteIncubadora(id).subscribe({
          next: (response: any) => {
            console.log(response);
            this.successMessage.message = 'Incubadora eliminada exitosamente';
            setTimeout(() => {
              this.successMessage.message = '';
              this.router.navigate(['/incubadoras']);
            }, 3000);
            this.incubadoras = this.incubadoras.filter((incubadora) => incubadora.id !== id);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      }
    });
  }
}
