import { Component, AfterContentInit } from '@angular/core';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { SensoresService } from '../../../Servicios/sensores.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ToolbarComponent, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements AfterContentInit {
  backendErrors: any = {};
  succesMessages: any = {};
  Form : FormGroup = new FormGroup({
    'nombre': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    'unidad': new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
  });
  constructor(private sensorService: SensoresService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngAfterContentInit(): void {
    this.sensorService.getSensorbyId(Number(this.route.snapshot.params['id'])).subscribe({
      next: (response: any) => {
        console.log(response);
        this.Form.patchValue(response.data);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  updateSensor(): void {
    this.sensorService.updateSensor(this.Form.value, Number(this.route.snapshot.params['id'])).subscribe({
      next: (response: any) => {
        console.log(response);
        setTimeout(() => {
          this.succesMessages.message = 'Sensor actualizado con éxito';
          this.backendErrors.message = '';
          this.router.navigate(['/sensores']);
        }, 2000);
      },
      error: (error: any) => {
        console.log(error);
        this.succesMessages.message = '';
        this.backendErrors.message = 'Error para actualizar al sensor, intente mas tarde';
      }
    });
  }

}
