import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormControl } from '@angular/forms';
import { SideToolComponent } from '../../../General/side-tool/side-tool.component';
import { Value } from '../../../Modelos/values.model';
import { SensoresService } from '../../../Servicios/sensores.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Sensor } from '../../../Modelos/sensores.model';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone: true,
  imports: [MatListModule, MatCardModule, MatIconModule, CommonModule, SideToolComponent, ReactiveFormsModule, NgxPaginationModule]
})
export class IndexComponent implements OnInit {
  constructor(private sensoresService : SensoresService){

  }
  displayedColumns: string[] = ['sensor_value', 'sensor_id', 'incubadora_id', 'bebe_id'];
  values : Value[] = []
  sensores : Sensor[] = []
  p : number = 1;
  sensorExist = false;
  sensorControl = new FormControl();
  ngOnInit(): void {
    this.sensoresService.getSensores().subscribe({
      next: (response: any) => {
        this.sensores = response.data;

  
        console.log(this.sensores);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    this.sensorControl.valueChanges.subscribe(sensorName => {
      this.sensoresService.getlogvalues(sensorName).subscribe({
        next: (response: any) => {
          
          this.values = response.data;
          this.sensorExist = false;
          console.log(this.values);
        },
        error: (error: any) => {
          console.log(sensorName)
          console.log(error);
          if(error.status === 404){
            this.values = [];
            this.sensorExist = true;
          }
        }
      });
    });


     
  }
}
