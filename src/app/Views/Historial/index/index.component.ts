import { Component, AfterContentInit } from '@angular/core';
import { SideToolComponent } from '../../../General/side-tool/side-tool.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HistorialService } from '../../../Servicios/historial.service';
import { Historial } from '../../../Modelos/historial.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../../General/ModalesConfirmacion/delete/delete.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [SideToolComponent, MatIconModule, RouterLink, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements AfterContentInit {
  
  historiales: Historial[] = [];
  successMessage: any = {};
  constructor(private historialService: HistorialService,
    private dialog: MatDialog
  ) { }

  ngAfterContentInit(): void {
    this.historialService.getHistoriales().subscribe({
      next: (response: any) => {
        this.historiales = response.data;
        console.log(response);
        console.log(this.historiales);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  delete(id: number) {
    const dialogRef = this.dialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.historialService.deleteHistorial(id).subscribe({
          next: (response: any) => {
            console.log(response);
            this.successMessage.message = 'Historial eliminado exitosamente';
            setTimeout(() => {
              this.successMessage.message = '';
              this.historiales = this.historiales.filter((historial) => historial.id !== id);
            }, 3000);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      }
    });
  }
}
