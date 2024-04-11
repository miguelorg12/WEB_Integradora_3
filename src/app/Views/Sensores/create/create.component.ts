import { Component, AfterContentInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { SensoresService } from '../../../Servicios/sensores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink, ToolbarComponent,ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements AfterContentInit {
  backendErrors: any = {};
  succesMessages: any = {};
  Form : FormGroup = new FormGroup({
    'nombre': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    'unidad': new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]),
  });
  ngAfterContentInit(): void {
      
  }

  constructor(private sensorService: SensoresService, private router: Router) { }

  createSensor(): void {
    this.sensorService.createSensor(this.Form.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this.succesMessages.message = 'Sensor creado con éxito';
        this.backendErrors.message = '';
        setTimeout(() => {
          this.backendErrors.message = '';
          this.router.navigate(['/sensores']);
        }, 2000);
      },
      error: (error: any) => {
        console.log(error);
        this.succesMessages.message = '';
        this.backendErrors.message = 'Error para crear al sensor, intente mas tarde';
      }
    });
  }
}
