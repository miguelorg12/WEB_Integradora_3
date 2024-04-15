import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HospitalesService } from '../../../Servicios/hospitales.service';
import { Hospital } from '../../../Modelos/hospital.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink, ToolbarComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  backendErrors: any = {};
  succesMessages: any = {};
  createForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
  });

  constructor(private hospitalService: HospitalesService,
    private router: Router) { }

  crearHospital(){
    if(this.createForm.valid){
      console.log(this.createForm.value);
      this.hospitalService.createHospital(this.createForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
          this.succesMessages.message = 'Hospital creado exitosamente';
          setTimeout(() => {
            this.succesMessages.message = '';
            this.backendErrors.nombre = '';
            this.backendErrors.direccion = '';
            this.backendErrors.telefono = '';
            this.router.navigate(['/hospitales']);
          }, 3000);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          if(error.error && error.error.Errors){
            if(error.error.Errors.nombre){
              this.backendErrors.nombre = 'El nombre ya está en uso';
            }
            else if(error.error.Errors.direccion){
              this.backendErrors.direccion = 'La dirección ya está en uso';
            }
            else if(error.error.Errors.telefono){
              this.backendErrors.telefono = 'El teléfono ya está en uso';
            }
            else{
              this.backendErrors.nombre = '';
              this.backendErrors.direccion = '';
              this.backendErrors.telefono = '';
              this.backendErrors = {message: 'Error al crear el hospital'}
            }
          }
        }
      });
    }
  }
  

}
