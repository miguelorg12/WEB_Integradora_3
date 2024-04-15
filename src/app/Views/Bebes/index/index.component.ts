import { Component, AfterContentInit } from '@angular/core';
import { SideToolComponent } from '../../../General/side-tool/side-tool.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, Router } from '@angular/router';
import { BebesService } from '../../../Servicios/bebes.service';
import { Bebe } from '../../../Modelos/bebes.model';
import { DeleteComponent } from '../../../General/ModalesConfirmacion/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [SideToolComponent,MatIconModule,RouterLink, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements AfterContentInit {
  bebes : Bebe[] = [];
  successMessage : any = {};
  constructor(private bebeService : BebesService, private dialog: MatDialog,
    private router : Router){}

  ngAfterContentInit(): void {
    this.bebeService.getBebes().subscribe({
      next: (response: any) => {
        this.bebes = response.Bebes;
        console.log(this.bebes);
        console.log(response);
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
        this.bebeService.deleteBebe(id).subscribe({
          next: (response: any) => {
            console.log(response);
            this.successMessage.message = 'Bebe eliminado exitosamente';
            setTimeout(() => {
              this.successMessage.message = '';
              this.router.navigate(['/bebes']);
            }, 3000);
            this.bebes = this.bebes.filter((bebe) => bebe.id !== id);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      }
    });
  }
  

}
