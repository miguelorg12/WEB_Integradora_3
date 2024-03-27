import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone: true,
  imports: [MatListModule, MatCardModule, MatIconModule, CommonModule, BrowserModule]
})
export class IndexComponent {
  displayedColumns: string[] = ['sensor_value', 'sensor_id', 'incubadora_id', 'bebe_id'];
  values: any[] = [
    {sensor_value: 'value1', sensor_id: 'id1', incubadora_id: 'inc1', bebe_id: 'beb1'},
    {sensor_value: 'value2', sensor_id: 'id2', incubadora_id: 'inc2', bebe_id: 'beb2'},
    {sensor_value: 'value3', sensor_id: 'id3', incubadora_id: 'inc3', bebe_id: 'beb3'}
  ];
}
