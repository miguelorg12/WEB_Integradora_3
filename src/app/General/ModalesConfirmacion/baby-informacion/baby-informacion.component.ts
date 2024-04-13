import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BebesService } from '../../../Servicios/bebes.service';
import { Contacto } from '../../../Modelos/contacto.model';
import { Historial } from '../../../Modelos/historial.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-baby-informacion',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './baby-informacion.component.html',
  styleUrl: './baby-informacion.component.css'
})
export class BabyInformacionComponent implements OnInit {
  constructor(private bebesService: BebesService, 
    public dialogRef: MatDialogRef<BabyInformacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  contactos : Contacto[] = [];
  historiales : Historial[] = [];
  bebefull : any = {};
  dialogClass: any;
  ngOnInit(): void {
    this.bebesService.getBebeFull(this.data.id_bebe).subscribe({
      next: (response: any) => {
        console.log(response);
        this.bebefull = response.Bebe;
        this.contactos = response.Contactos;
        this.historiales = response.Historial;

        this.dialogClass = this.bebefull.sexo === 'M' ? 'dialog-male' : 'dialog-female';
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
