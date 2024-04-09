import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { UsuarioService } from '../../Servicios/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  backendErrors: any = {};
  succesMessages: any = {};
  constructor(private userService: UsuarioService, private cookie: CookieService,
    private router: Router) { }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  login() {
    if (this.loginForm.valid) {
      this.userService.logCode(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (response: any) => {
          console.log(response);
          localStorage.setItem('email', this.loginForm.value.email);
          localStorage.setItem('password', this.loginForm.value.password);
          this.succesMessages.message = 'Loggeo Exitoso';
          this.backendErrors.email = null;
          this.backendErrors.credenciales = null;
          this.backendErrors.active = null;
          this.backendErrors.activeAdmin = null;
          setTimeout(() => {
            this.backendErrors = {};
            this.router.navigate(['/code-verificacion']);
          }, 3000);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          if (error.status === 401 && error.error.credenciales) {
            console.log(error.error);
            this.backendErrors.credenciales = 'Credenciales incorrectas';
            this.backendErrors.active =  null;
            this.backendErrors.email = null;
          }
          else if(error.status === 401 && error.error.active){
            console.log(error.error);
            this.backendErrors.credenciales = null;
            this.backendErrors.active =  'Primero debe activar la cuenta';
            this.backendErrors.email = null;
          }
          else if(error.status === 404){
            console.log(error.error);
            this.backendErrors.email = 'El email no está registrado';
            this.backendErrors.credenciales = null;
          }
          else if(error.status === 403){
            console.log(error.error);
            this.backendErrors.email = null;
            this.backendErrors.credenciales = null;
            this.backendErrors.activeAdmin='Su cuenta ha sido desactivada por los administradores';
          }
          else{
            this.backendErrors.email = null;
            this.backendErrors.credenciales = null;
            this.backendErrors = {message:'Error al loggearse, intente mas tarde'};
          }
        }
      });
    }
  }
}
