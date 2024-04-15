import { Component, AfterContentInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { UsuarioService } from '../../../Servicios/usuario.service';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RolesService } from '../../../Servicios/roles.service';
import { Rol } from '../../../Modelos/roles.model';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Hospital } from '../../../Modelos/hospital.model';
import { CookieService } from 'ngx-cookie-service';
import { HospitalesService } from '../../../Servicios/hospitales.service';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterLink, ToolbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements AfterContentInit {
  roles : Rol[] = []
  hospitales : Hospital[] = []
  user :  any
  userid : number = 0
  rolUser : any
  backendErrors: any = {};
  succesMessages: any = {};
  constructor(private userService: UsuarioService, private rolesService: RolesService,
    private cookie:CookieService,
    private route: ActivatedRoute,
    private router: Router,
    private hospitalesService : HospitalesService) { }
  updateForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    id_rol: new FormControl('', [Validators.required]),
    id_hospital: new FormControl(''),
  });
  ngAfterContentInit(): void {
    this.rolUser = this.cookie.get('id_rol');
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
    this.hospitalesService.getHospitales().subscribe({
      next: (response: any) => {
        console.log(response);
        this.hospitales = response.Hospitales;
        console.log(this.hospitales);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    this.userid = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserbyId(this.userid).subscribe({
      next: (response: any) => {
        this.user = response.data;
        this.updateForm.setValue({
          name: this.user.name,
          last_name: this.user.last_name,
          id_rol: this.user.id_rol,
          id_hospital: this.user.id_hospital
        });
        console.log(this.user);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  } 

  updateUser(){
    console.log(this.updateForm.value)
    if(this.updateForm.valid){
      this.userService.updateUser(this.updateForm.value, this.userid).subscribe({
        next: (response: any) => {
          console.log(response);
          this.succesMessages.message = 'Usuario actualizado exitosamente';
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
          }
          else {
            this.backendErrors.message = 'Error al actualizar el usuario';
          }
        }
      });
    }
  }



}
