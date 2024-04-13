import { Component, AfterContentInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
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
  selector: 'app-update',
  standalone: true,
  imports: [RouterLink,ToolbarComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements AfterContentInit {
  hospitales : Hospital[] = [];
  estados : EstadoIncubadora[] = [];
  sensoresSeleccionados : number[] = [];
  
  id_rol : any;
  sensores : Sensor[] = [];
  backendErrors: any = {};
  succesMessages: any = {};
  Form : FormGroup = new FormGroup({
    id_hospital: new FormControl('', [Validators.required]),
    id_estado: new FormControl('', [Validators.required]),
    is_active: new FormControl('', [Validators.required]),
    id_sensores: new FormControl([], [Validators.required]),
    is_occupied: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private incubadorasService: IncubadorasService,
    private hospitalesService: HospitalesService, private sensoresService: SensoresService,
    private cookies:CookieService,
    private route : ActivatedRoute) { }

    
  ngAfterContentInit(): void {
    this.id_rol = this.cookies.get('id_rol');
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
    this.incubadorasService.getIncubadorabyId(this.route.snapshot.params['id']).subscribe({
      next: (response: any) => {
        console.log(response);
        this.Form.setValue({
          id_hospital: response.Incubadora.id_hospital,
          id_estado: response.Incubadora.id_estado,
          is_active: response.Incubadora.is_active,
          id_sensores: response.Sensores.map((sensor: any) => sensor.id_sensor),
          is_occupied: response.Incubadora.is_occupied
        });
        this.sensoresSeleccionados = response.Sensores.map((sensor: any) => sensor.id_sensor);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    this.incubadorasService.getEstadosIncubadora().subscribe({
      next: (response: any) => {
        console.log(response);
        this.estados = response.estado;
        console.log(this.estados);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  updateIncubadora(){
    if(this.Form.valid){
      this.incubadorasService.updateIncubadora(this.Form.value, this.route.snapshot.params['id']).subscribe({
        next: (response: any) => {
          console.log(response);
          this.succesMessages.message = 'Incubadora actualizada exitosamente';
          this.backendErrors.message = '';
          setTimeout(() => {
            this.succesMessages.message = '';
            this.router.navigate(['/incubadoras']);
          }, 2000);
        },
        error: (error: any) => {
          console.log(error);
          this.backendErrors.message = 'Error al actualizar intente mas tarde';
        }
      });
    }
  }
  agregarSensor(event: any, sensorId: number) {
    if (event.target.checked) {
      this.sensoresSeleccionados.push(sensorId);
      console.log(this.sensoresSeleccionados);
    } else {
      const index = this.sensoresSeleccionados.indexOf(sensorId);
      if (index > -1) {
        this.sensoresSeleccionados.splice(index, 1);
        console.log(this.sensoresSeleccionados); 
      }
    }
    const control = this.Form.get('id_sensores');
    if (control) {
      control.setValue(this.sensoresSeleccionados);
      console.log(control.value);
    }
    }
}
