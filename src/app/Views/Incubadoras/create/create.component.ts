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
import { CookieService } from 'ngx-cookie-service';
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
  id_rol : any;
  sensores : Sensor[] = [];
  backendErrors: any = {};
  succesMessages: any = {};
  Form : FormGroup = new FormGroup({
    id_hospital: new FormControl(''),
    id_estado: new FormControl('', [Validators.required]),
    id_sensores: new FormControl([], [Validators.required]),
  });

  constructor(private router: Router, private incubadorasService: IncubadorasService,
    private hospitalesService: HospitalesService, private sensoresService: SensoresService,
  private cookies:CookieService) { }
  
  ngAfterContentInit(): void {
    this.id_rol = this.cookies.get('id_rol');
    const id_hospital = this.cookies.get('id_hospital'); 
    this.hospitalesService.getHospitales().subscribe({
      next: (response: any) => {
        const id_hospital = Number(this.cookies.get('id_hospital')); 
        this.hospitales = response.Hospitales.filter((hospital: Hospital) => hospital.is_active && Number(hospital.id) === id_hospital);
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
  crearIncubadora() {
    console.log(this.Form.value);
    console.log("ID del hospital seleccionado:", this.Form.value.id_hospital); // Agregar esta línea
    console.log("Sensores seleccionados:", this.sensoresSeleccionados); 
  
    if (this.Form.valid && this.sensoresSeleccionados.length > 0) {
      const hospitalSeleccionado = this.findHospitalById(this.Form.value.id_hospital);
      if (!hospitalSeleccionado) {
        this.backendErrors = { message: 'Hospital no encontrado' };
        return;
      }
  
      this.incubadorasService.createIncubadora(this.Form.value).subscribe({
        next: (response: any) => {
          this.succesMessages.message = 'Incubadora creada con éxito';
          this.backendErrors = '';
          setTimeout(() => {
            this.router.navigate(['/incubadoras']);
            this.succesMessages = '';
          }, 3000);
          console.log(response);
        },
        error: (error: any) => {
          this.backendErrors = error.error;
          this.succesMessages = '';
          this.backendErrors = { message: "Error al crear incubadora, intente más tarde" };
          console.log(error);
        }
      });
    } else {
      this.backendErrors = { message: 'Al menos 1 sensor es requerido' };
    }
  }
  
  findHospitalById(id: string): Hospital | undefined {
    return this.hospitales.find((hospital: Hospital) => Number(hospital.id) === Number(id));
  }
  
}
