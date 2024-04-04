import { Component, AfterContentInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HospitalesService } from '../../Servicios/hospitales.service';
import { UsuarioService } from '../../Servicios/usuario.service';
import { Hospital } from '../../Modelos/hospital.model';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements AfterContentInit {
  hospitales: Hospital[] = [];
  backendErrors: any = {};
  hide = true;
  hideConfirmPassword = true;
constructor(private router: Router,
  private userService: UsuarioService,
  private hospitalService: HospitalesService,
  private cookie: CookieService
  ) { 
  }
  registerForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(255), ]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirm_password: new FormControl('', [Validators.required]),
    id_hospital: new FormControl(0),
  });

  ngAfterContentInit(): void {
      this.hospitalService.getHospitalesNtoken().subscribe((response: any) => {
        this.hospitales = response.Hospitales;
        console.log(this.hospitales);
      });
  }
  register() {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value).subscribe({
          next: (response: any) => {
            console.log(response);
            this.router.navigate(['/check-email']);
            this.cookie.set('id', response.id, 5/60/24);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error);
            console.log(this.registerForm.value);
            if (error.status === 400) {
              console.log(error.error);
              if(error.error.Errors.email && error.error.Errors.confirm_password){
                this.backendErrors.email = 'El email ya está en uso';
                this.backendErrors.confirm_password = 'Las contraseñas no coinciden';
              }
              else if (error.error.Errors.email) {
                this.backendErrors.email = 'El email ya está en uso';
                this.backendErrors.confirm_password = null;
              }
              else if(error.error.Errors.confirm_password) {
                this.backendErrors.email = null;
                this.backendErrors.confirm_password = 'Las contraseñas no coinciden';
              }
              else{
                this.backendErrors = {message:'Error al registrarse, intente más tarde'};
              }
            }
          }
        }
      )
    }
  }
}
