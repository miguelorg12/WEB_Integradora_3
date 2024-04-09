import { Component, AfterContentInit } from '@angular/core';
import { SideToolComponent } from '../../General/side-tool/side-tool.component';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { UsuarioService } from '../../Servicios/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { HospitalesService } from '../../Servicios/hospitales.service';
import { Hospital } from '../../Modelos/hospital.model';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SideToolComponent, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements AfterContentInit {
  hospitales : Hospital[] = [];
  usuario_nombre = '';
  usuario_apellidos = '';
  usuario_hospital = '';
  id = 0;
  IsEditable = false;
  succesMessages : any = {};
  profileForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    id_hospital: new FormControl(0),
  });
  constructor(private usuarioService: UsuarioService, private cookie: CookieService, private hospitalService: HospitalesService,
    private router:Router) { }
  ngAfterContentInit(): void {
    this.usuario_nombre = this.cookie.get('nombre');
    this.usuario_apellidos = this.cookie.get('apellido');
    this.usuario_hospital = this.cookie.get('id_hospital');
    this.hospitalService.getHospitales().subscribe((response: any) => {
      this.hospitales = response.Hospitales;
      console.log(this.hospitales);
    });
    this.profileForm.setValue({
      name: this.usuario_nombre,
      last_name: this.usuario_apellidos,
      id_hospital: Number(this.usuario_hospital)
    });
    console.log(this.profileForm.value);
  }
  toggleEdit() {
    this.IsEditable = !this.IsEditable;
  }
  update(){
    if(this.IsEditable){
    this.id = Number(this.cookie.get('id'));
    console.log(this.id);
    if(this.profileForm.valid){
      this.usuarioService.updateUser(this.profileForm.value, this.id).subscribe({
        next: (response: any) => {
          console.log(response);
          console.log(this.profileForm.value);
          this.cookie.set('nombre', response.name, 1);
          this.cookie.set('apellido', response.last_name, 1);
          this.cookie.set('id_hospital', response.id_hospital.toString(), 1);
          this.cookie.set('id_rol', response.rol.toString(), 1);
          this.usuario_nombre = response.name;
          this.usuario_apellidos = response.last_name;
          this.usuario_hospital = response.id_hospital.toString();
          this.IsEditable = false;
          this.succesMessages.update = 'Usuario actualizado correctamente';
          setTimeout(() => {
            this.succesMessages.update = '';
            this.router.navigate(['/home']);
          }, 1000);
        },
        error: (error: any) => {
          console.log(error);
          this.succesMessages.update = 'Error al actualizar el usuario';
        }
      });
    }
  }
}

}
