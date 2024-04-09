import { Component, AfterContentInit} from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EstadoBebe } from '../../../Modelos/estadobebe.model';
import { BebesService } from '../../../Servicios/bebes.service';
import { EstadoBebeService } from '../../../Servicios/estado-bebe.service';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterLink, ToolbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements AfterContentInit {
  estados : EstadoBebe[] = [];
  backendErrors: any = {};
  succesMessages : any = {};
  bebe : any

  constructor(private bebeService: BebesService, private router: Router, private route: ActivatedRoute,
  private estadoService : EstadoBebeService) { }

  updateForm: FormGroup = new FormGroup({
    'nombre': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    'apellido': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    'peso' : new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    'id_estado': new FormControl('', [Validators.required]),
  });
  ngAfterContentInit(): void {
    this.estadoService.getEstadosBebe().subscribe({
      next: (response: any) => {
        this.estados = response.data;
        console.log(response)
        console.log(this.estados);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    this.bebeService.getBebebyId(this.route.snapshot.params['id']).subscribe({
      next: (response: any) => {
        this.bebe = response.data;
        this.updateForm.setValue({
          nombre: this.bebe.nombre,
          apellido: this.bebe.apellido,
          peso: this.bebe.peso,
          id_estado: this.bebe.id_estado
        })
        console.log(response)
        console.log(this.bebe);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  updateBebe() {
    console.log(this.updateForm.value)
    this.bebeService.updateBebe(this.route.snapshot.params['id'], this.updateForm.value).subscribe({
      next: (response: any) => {
        this.succesMessages.message = 'Actualizacion de bebe exitosa';
        this.backendErrors.message = ''
        console.log(response);
        this.router.navigate(['/bebes']);
      },
      error: (error: any) => {
        this.backendErrors = { message : 'Error al actualizar bebe, intente mas tarde'};
        console.log(error);
      }
    });
  }
}
