import { Component, AfterContentInit } from '@angular/core';
import { SideToolComponent } from '../../../General/side-tool/side-tool.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HospitalesService } from '../../../Servicios/hospitales.service';
import { Hospital } from '../../../Modelos/hospital.model';
import { DeleteComponent } from '../../../General/ModalesConfirmacion/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink, SideToolComponent, MatIconModule, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  hospitales : Hospital[] = [];
  successMessage : any = {};
  constructor(private hospitalService: HospitalesService, private dialog: MatDialog,
    private router: Router) { }
  ngAfterContentInit(): void {
    this.hospitalService.getHospitales().subscribe({
      next: (response: any) => {
        this.hospitales = response.Hospitales;
        console.log(this.hospitales);
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
        this.hospitalService.deleteHospital(id).subscribe({
          next: (response: any) => {
            console.log(response);
            this.successMessage.message = 'Hospital eliminado exitosamente';
            setTimeout(() => {
              this.successMessage.message = '';
              this.router.navigate(['/hospitales']);
            }, 3000);
            // Llama nuevamente a getHospitales() para actualizar la lista después de la eliminación
            this.hospitalService.getHospitales().subscribe({
              next: (response: any) => {
                this.hospitales = response.Hospitales;
              },
              error: (error: any) => {
                console.log(error);
              }
            });
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      }
    });
  }
  
}



