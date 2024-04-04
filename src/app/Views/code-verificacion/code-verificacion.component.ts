import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { UsuarioService } from '../../Servicios/usuario.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-code-verificacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './code-verificacion.component.html',
  styleUrl: './code-verificacion.component.css'
})
export class CodeVerificacionComponent {
  backendErrors: any = {};
  succesMessages: any = {};
  constructor(private usuarioService: UsuarioService, private router: Router,
    private cookie:CookieService) { 
  }
  codeForm: FormGroup = new FormGroup({
    code1: new FormControl('', [Validators.required,]),
    code2: new FormControl('', [Validators.required,]),
    code3: new FormControl('', [Validators.required,]),
    code4: new FormControl('', [Validators.required,]),
    code5: new FormControl('', [Validators.required,]),
    code6: new FormControl('', [Validators.required,]),
  });

  moveFocus(event: KeyboardEvent, nextInput: HTMLInputElement, previousInput: HTMLInputElement) {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1) {
      nextInput.focus();
    } else if (event.key === 'Backspace' && input.value.length === 0) {
      previousInput.focus();
    }
  }
  verifyCode() {
    if (this.codeForm.valid) {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
      const codigo = this.codeForm.value.code1 + this.codeForm.value.code2 + this.codeForm.value.code3 + this.codeForm.value.code4 + this.codeForm.value.code5 + this.codeForm.value.code6;
      this.usuarioService.codeVerificacion(codigo, email!, password!).subscribe({
        next: (response: any) => {
          console.log(response);
          localStorage.removeItem('email');
          localStorage.removeItem('password');
          this.succesMessages.message = 'Código correcto';
          this.cookie.set('token', response.access_token, 1);
          setTimeout(() => {
            this.backendErrors = {};
            this.router.navigate(['/home']);
          }, 3000);
        },
        error: (error: HttpErrorResponse) => {
          console.log(codigo);
          console.log(error.error);
          if (error.status === 400) {
            console.log(error.error);
            this.backendErrors.code = 'Código incorrecto';
          }
          else if (error.status === 401) {
            console.log(error.error);
            this.backendErrors.code = 'Credenciales incorrectas';
          }
          else if(error.status === 404){
            this.backendErrors.code = 'Usuario no encontrado';
          }
          else{
            this.backendErrors = {message:'Error al verificar el código, intente mas tarde'};
          }
        }
      });
    }
  }
}
