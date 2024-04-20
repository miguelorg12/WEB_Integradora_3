import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SideToolComponent } from '../../General/side-tool/side-tool.component'; 
import { IncubadorasService } from '../../Servicios/incubadoras.service';
import { Incubadora } from '../../Modelos/incubadoras.model';
import { MatDialog } from '@angular/material/dialog';
import { BabyInformacionComponent } from '../../General/ModalesConfirmacion/baby-informacion/baby-informacion.component';
import { SensoresIncubadorasService } from '../../Servicios/sensores-incubadoras.service';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
@Component({
  selector: 'app-bebes-incubadoras',
  standalone: true,
  imports: [MatIconModule, RouterLink, SideToolComponent, CommonModule],
  templateUrl: './bebes-incubadoras.component.html',
  styleUrl: './bebes-incubadoras.component.css'
})
export class BebesIncubadorasComponent implements OnInit {
  constructor(private incubadorasService: IncubadorasService, public dialog: MatDialog,
    private sensoresIncubadorasService: SensoresIncubadorasService
  ) { }
  babyid : any;
  cardGroups = [2]
  values : any[] = []
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
    (window as any).Pusher = Pusher;
    (window as any).Echo = new Echo({
      broadcaster: 'pusher',
      key: 'askjsdak',
      cluster: 'mt1',
      wsHost: '34.227.197.144',
      wsPort: 6001,
      forceTLS: false,
      disableStatus: true,
    }); 
    (window as any).Echo.channel('testing')
    .listen('.testWebsocket', (data: any) => {
      console.log(data);
      console.log('hola');
      this.getValues();
    });
    this.getValues();

      
  }
  openDialog(id_bebe: any) {
    this.dialog.open(BabyInformacionComponent, {
      data: {
        id_bebe: id_bebe
      }
    });
  }
  getValues(){
    this.sensoresIncubadorasService.getValue().subscribe({
      next: (response: any) => {
        console.log(response);
        this.values = Object.keys(response).map(key => response[key]);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
