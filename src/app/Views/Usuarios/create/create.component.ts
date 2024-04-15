import { Component, AfterContentInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { UsuarioService } from '../../../Servicios/usuario.service';
import { RolesService } from '../../../Servicios/roles.service';
import { Rol } from '../../../Modelos/roles.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../../../Modelos/usuario.model';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink, ToolbarComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  roles : Rol[] = [];
  backendErrors: any = {};
  succesMessages: any = {};
  createForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(255), ]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirm_password: new FormControl('', [Validators.required]),
    id_rol: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private userService: UsuarioService, private rolesService: RolesService,
    private cookie: CookieService) { }
  ngAfterContentInit(): void {
    this.rolesService.getRoles().subscribe({
      next: (response: any) => {
        this.roles = response.data;
        console.log(response);
        console.log(this.roles);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  crearUsuario(){
    if(this.createForm.valid){
      console.log(this.createForm.value);
      this.userService.createUser(this.createForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
          this.succesMessages.message = 'Usuario creado exitosamente';
          setTimeout(() => {
            this.router.navigate(['/usuarios']);
            this.succesMessages.message = '';
            this.backendErrors.email = '';
            this.backendErrors.confirm_password = '';
            this.backendErrors.message = '';
          }, 3000);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          if (error.status === 400) {
            console.log(error.error);
            if(error.error.errors.email){
              this.backendErrors.email = 'El email ya está en uso';
              this.backendErrors.confirm_password = '';
              this.backendErrors.message = '';
            }
            else if(error.error.errors.confirm_password){
              this.backendErrors.confirm_password = 'Las contraseñas no coinciden';
              this.backendErrors.email = '';
              this.backendErrors.message = '';
            }
          }
          else{
            console.log(error.error);
            this.backendErrors = {message : 'Error al crear usuario, intente mas tarde'};
          }
        }
      });
    }
  }
}
