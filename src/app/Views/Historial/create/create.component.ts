import { Component, AfterContentInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { Bebe } from '../../../Modelos/bebes.model';
import { BebesService } from '../../../Servicios/bebes.service';
import { HistorialService } from '../../../Servicios/historial.service';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ToolbarComponent, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements AfterContentInit {
  backendErrors: any = {};
  bebes : Bebe[] = [];
  succesMessages: any = {};
  Form : FormGroup = new FormGroup({
    'id_bebe': new FormControl('', [Validators.required]),
    'diagnostico': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
    'medicamentos': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
  });
  constructor(private historialService: HistorialService, private router: Router,
    private bebeService: BebesService) { }
  
  ngAfterContentInit(): void {
    this.bebeService.getBebes().subscribe({
      next: (response: any) => {
        console.log(response);
        this.bebes = response.Bebes;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  createHistorial(): void {
    this.historialService.createHistorial(this.Form.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this.succesMessages.message = 'Historial creado con éxito';
        this.backendErrors.message = '';
        setTimeout(() => {
          this.router.navigate(['/historial']);
        }, 2000);
      },
      error: (error: any) => {
        console.log(error);
        this.backendErrors.message = 'Error para crear el historial, intente mas tarde';
        this.succesMessages.message = '';
      }
    });
  }

}
