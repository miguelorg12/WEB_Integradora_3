import { Component, AfterContentInit } from '@angular/core';
import { SideToolComponent } from '../../../General/side-tool/side-tool.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Sensor } from '../../../Modelos/sensores.model';
import { SensoresService } from '../../../Servicios/sensores.service';
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
  sensores: Sensor[] = [];
  successMessage: any = {};
  constructor(private sensoresService: SensoresService, private dialog: MatDialog) { }

  ngAfterContentInit(): void {
    this.sensoresService.getSensores().subscribe({
      next: (response: any) => {
        this.sensores = response.data;
        console.log(this.sensores);
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
        this.sensoresService.deleteSensor(id).subscribe({
          next: (response: any) => {
            console.log(response);
            this.successMessage.message = 'Sensor eliminado exitosamente';
            setTimeout(() => {
              this.successMessage.message = '';
              this.sensores = this.sensores.filter((sensor) => sensor.id !== id);
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
