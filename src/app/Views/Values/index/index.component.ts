import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { SideToolComponent } from '../../../General/side-tool/side-tool.component';
import { NgModule } from '@angular/core';
import { Value } from '../../../Modelos/values.model';
import { SensoresService } from '../../../Servicios/sensores.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Sensor } from '../../../Modelos/sensores.model';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone: true,
  imports: [MatListModule, MatCardModule, MatIconModule, CommonModule, SideToolComponent, ReactiveFormsModule]
})
export class IndexComponent implements OnInit {
  constructor(private sensoresService : SensoresService){

  }
  displayedColumns: string[] = ['sensor_value', 'sensor_id', 'incubadora_id', 'bebe_id'];
  values : Value[] = []
  sensores : Sensor[] = []
  nombre_sensor : string = '';
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
          console.log(this.values);
        },
        error: (error: any) => {
          console.log(sensorName)
          console.log(error);
        }
      });
    });


     
  }
}
