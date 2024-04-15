import { Component, AfterContentInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { HistorialService } from '../../../Servicios/historial.service';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterLink,ToolbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements AfterContentInit {
  backendErrors: any = {};
  succesMessages: any = {};
  id_historial : any;
  Form : FormGroup = new FormGroup({
    'diagnostico': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
    'medicamentos': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
  });
  constructor(private historialService: HistorialService, private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngAfterContentInit(): void {
    this.id_historial = Number(this.route.snapshot.params['id']);
    this.historialService.getHistorialbyId(this.id_historial).subscribe({
      next: (response: any) => {
        console.log(response);
        this.Form.patchValue(response.data);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
      
  }

  updateHistorial(): void {
    this.historialService.updateHistorial(this.Form.value, this.id_historial).subscribe({
      next: (response: any) => {
        console.log(response);
        this.succesMessages.message = 'Historial actualizado con éxito';
        this.backendErrors.message = '';
        setTimeout(() => {
          this.backendErrors.message = '';
          this.router.navigate(['/historial']);
        }, 2000);
      },
      error: (error: any) => {
        console.log(error);
        this.succesMessages.message = '';
        this.backendErrors.message = 'Error para actualizar el historial, intente mas tarde';
      }
    });
  }


}
