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
  });

  constructor(private hospitalService: HospitalesService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngAfterContentInit(): void {
    this.hospitalService.getHospitalbyId(Number(this.route.snapshot.paramMap.get('id'))).subscribe({
      next: (response: any) => {
        console.log(response)
        this.createForm.setValue({
          nombre: response.data.nombre,
          direccion: response.data.direccion,
          telefono: response.data.telefono
        });
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }
  updateHospital(){
    this.hospitalService.updateHospital(this.createForm.value, Number(this.route.snapshot.paramMap.get('id'))).subscribe({
      next: (response: any) => {
        console.log(response);
        this.succesMessages.message = 'Hospital actualizado exitosamente';
        setTimeout(() => {
          this.backendErrors = {};
          this.router.navigate(['/hospitales']);
        }, 3000);
      },
      error: (error: HttpErrorResponse) => {
        this.backendErrors = error.error;
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
