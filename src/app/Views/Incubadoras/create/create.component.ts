import { Component, AfterContentInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { HospitalesService } from '../../../Servicios/hospitales.service';
import { CommonModule } from '@angular/common';
import { Hospital } from '../../../Modelos/hospital.model';
import { IncubadorasService } from '../../../Servicios/incubadoras.service';
import { SensoresService } from '../../../Servicios/sensores.service';
import { Sensor } from '../../../Modelos/sensores.model';
import { EstadoIncubadora } from '../../../Modelos/estadoIncubadora.model';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink, ToolbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements AfterContentInit {
  hospitales : Hospital[] = [];
  estados : EstadoIncubadora[] = [];
  sensoresSeleccionados : number[] = [];
  sensores : Sensor[] = [];
  backendErrors: any = {};
  succesMessages: any = {};
  Form : FormGroup = new FormGroup({
    id_hospital: new FormControl('', [Validators.required]),
    id_estado: new FormControl('', [Validators.required]),
    id_sensores: new FormControl([], [Validators.required]),
  });

  constructor(private router: Router, private incubadorasService: IncubadorasService,
    private hospitalesService: HospitalesService, private sensoresService: SensoresService) { }
  
  ngAfterContentInit(): void {
    this.hospitalesService.getHospitales().subscribe({
      next: (response: any) => {
        this.hospitales = response.Hospitales;
        console.log(this.hospitales);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    this.sensoresService.getSensores().subscribe({
      next: (response: any) => {
        console.log(response);
        this.sensores = response.data;
        console.log(this.sensores);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    this.incubadorasService.getEstadosIncubadora().subscribe({
      next: (response: any) => {
        this.estados = response.estado;
        console.log(this.estados);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  agregarSensor(event: any, sensorId: number) {
  if (event.target.checked) {
    this.sensoresSeleccionados.push(sensorId);
  } else {
    const index = this.sensoresSeleccionados.indexOf(sensorId);
    if (index > -1) {
      this.sensoresSeleccionados.splice(index, 1);
    }
  }
  const control = this.Form.get('id_sensores');
  if (control) {
    control.setValue(this.sensoresSeleccionados);
  }
  }
  crearIncubadora(){
  console.log(this.Form.value)
  if(this.Form.valid && this.sensoresSeleccionados.length > 0){
    this.incubadorasService.createIncubadora(this.Form.value).subscribe({
      next: (response: any) => {
        this.succesMessages.message = 'Incubadora creada con exito';
        this.backendErrors = '';
        setTimeout(() => {
          this.router.navigate(['/incubadoras']);
          this.succesMessages = '';
        }, 3000);
        console.log(response);
      },
      error: (error: any) => {
        this.backendErrors = error.error;
        this.succesMessages = ''
        this.backendErrors = { message:"Error al crear incubadora, intente mas tarde"}
        console.log(error);
      }
    });
  } else {
    this.backendErrors = { message: 'Al menos 1 sensor es requerido' };
  }
}
}
