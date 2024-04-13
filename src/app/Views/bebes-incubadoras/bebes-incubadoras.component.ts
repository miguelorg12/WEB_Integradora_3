import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SideToolComponent } from '../../General/side-tool/side-tool.component'; 
import { IncubadorasService } from '../../Servicios/incubadoras.service';
import { Incubadora } from '../../Modelos/incubadoras.model';
import { MatDialog } from '@angular/material/dialog';
import { BabyInformacionComponent } from '../../General/ModalesConfirmacion/baby-informacion/baby-informacion.component';
@Component({
  selector: 'app-bebes-incubadoras',
  standalone: true,
  imports: [MatIconModule, RouterLink, SideToolComponent, CommonModule],
  templateUrl: './bebes-incubadoras.component.html',
  styleUrl: './bebes-incubadoras.component.css'
})
export class BebesIncubadorasComponent implements OnInit {
  constructor(private incubadorasService: IncubadorasService, public dialog: MatDialog) { }
  babyid : any;
  cardGroups = [2]
  incubadoras : Incubadora[] = [];
  ngOnInit(): void {
    this.incubadorasService.getIncubadorasOcupadas().subscribe({
      next: (response: any) => {
        this.incubadoras = response.Incubadoras;
        console.log(this.incubadoras);
        console.log(response)
      },
      error: (error: any) => {
        console.log(error);
      }
    });
      
  }
  openDialog(id_bebe: any) {
    this.dialog.open(BabyInformacionComponent, {
      data: {
        id_bebe: id_bebe
      }
    });
  }

}
