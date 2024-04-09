import { Component, AfterContentInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { BebesService } from '../../../Servicios/bebes.service';
import { CommonModule } from '@angular/common';
import { EstadoBebe } from '../../../Modelos/estadobebe.model';
import { EstadoBebeService } from '../../../Servicios/estado-bebe.service';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Incubadora } from '../../../Modelos/incubadoras.model';
import { IncubadorasService } from '../../../Servicios/incubadoras.service';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink, ToolbarComponent, MatDatepickerModule
    , MatNativeDateModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements AfterContentInit {
  estados : EstadoBebe[] = [];
  incubadoras : Incubadora[] = [];
  backendErrors: any = {};
  succesMessages: any = {};
  Form : FormGroup = new FormGroup({
    'nombre': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    'apellido': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    'sexo' : new FormControl('', [Validators.required]),
    'fecha_nacimiento': new FormControl('', [Validators.required]),
    'edad' : new FormControl('', [Validators.required],),
    'peso' : new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    'id_estado': new FormControl('', [Validators.required]),
    'id_incubadora': new FormControl('', [Validators.required]),
  });
  constructor(private bebeService: BebesService, private estadoBebeService: EstadoBebeService,
    private incubadoraService: IncubadorasService,
    private router : Router) { }

  ngAfterContentInit(): void {
    this.estadoBebeService.getEstadosBebe().subscribe({
      next: (response: any) => {
        this.estados = response.data;
        console.log(response)
        console.log(this.estados);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    this.incubadoraService.getIncubadoras().subscribe({
      next: (response: any) => {
        this.incubadoras = response.Incubadoras;
        console.log(response)
        console.log(this.incubadoras);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  crearBebe(){
    if(this.Form.valid){
      console.log(this.Form.value);
      this.bebeService.createBebe(this.Form.value).subscribe({
        next: (response: any) => {
          console.log(response);
          this.succesMessages.message = 'Bebe creado exitosamente';
          setTimeout(() => {
            this.succesMessages.message = '';
            this.backendErrors.message = '';
            this.router.navigate(['/bebes']);
          }, 3000);
        },
        error: (error: any) => {
          console.log(error);
          this.backendErrors = {message : "Error al registrar bebe, intente mas tarde"};
        }
      });
    }
  }
}
