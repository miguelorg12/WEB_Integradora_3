import { Component, AfterContentInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { HospitalesService } from '../../../Servicios/hospitales.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterLink, ToolbarComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements AfterContentInit {
  backendErrors: any = {};
  succesMessages: any = {};
  createForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
    is_active: new FormControl('', Validators.required)
  });

  constructor(private hospitalService: HospitalesService,
    private router: Router,
    private route: ActivatedRoute) { }
    ngAfterContentInit(): void {
      this.hospitalService.getHospitalbyId(Number(this.route.snapshot.paramMap.get('id'))).subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.data && response.data.is_active !== undefined) {
            this.createForm.patchValue({
              nombre: response.data.nombre,
              direccion: response.data.direccion,
              telefono: response.data.telefono,
              is_active: response.data.is_active
            });
          } else {
            console.log('La respuesta no contiene datos válidos para actualizar el hospital');
          }
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      });
    }
    
    updateHospital() {
      const formValues = this.createForm.value;
      formValues.is_active = formValues.is_active.toString();
      console.log(formValues); 
      this.hospitalService.updateHospital(formValues, Number(this.route.snapshot.paramMap.get('id'))).subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.data && response.data.is_active !== undefined) {
            console.log(response.data.is_active); // Verifica si is_active está definido antes de intentar acceder a él
          }
          this.succesMessages.message = 'Hospital actualizado exitosamente';
          setTimeout(() => {
            this.backendErrors = {};
            this.router.navigate(['/hospitales']);
          }, 3000);
        },
        error: (error: HttpErrorResponse) => {
          this.backendErrors = error.error;
          console.log(error);
          if (error.error && error.error.Errors) {
            if (error.error.Errors.nombre) {
              this.backendErrors.nombre = 'El nombre ya está en uso';
            } else if (error.error.Errors.direccion) {
              this.backendErrors.direccion = 'La dirección ya está en uso';
            } else if (error.error.Errors.telefono) {
              this.backendErrors.telefono = 'El teléfono ya está en uso';
            } else if (error.error.Errors.is_active) {
              this.backendErrors.is_active = 'El estado no es válido';
            }
            // Mantén los errores existentes si no hay errores específicos para el campo "estado"
            else {
              this.backendErrors = { message: 'Error al crear el hospital' };
            }
          }
        }
      });
    }
    
    
    
}
