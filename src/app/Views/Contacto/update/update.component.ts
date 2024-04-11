import { Component, AfterContentInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { BebesService } from '../../../Servicios/bebes.service';
import { Bebe } from '../../../Modelos/bebes.model';
import { ContactoService } from '../../../Servicios/contacto.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterLink, ToolbarComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements AfterContentInit {
  backendErrors: any = {};
  contact_id : any;
  bebes : Bebe[] = [];
  succesMessages: any = {};
  Form : FormGroup = new FormGroup({
    'nombre': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    'apellido': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    'telefono' : new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    'email' : new FormControl('', [Validators.required, Validators.email]),
    'id_bebe' : new FormControl('', [Validators.required]),
  });

  constructor(private contactoService: ContactoService, private router: Router,
    private bebeService: BebesService,
    private route:ActivatedRoute) { }

  ngAfterContentInit(): void {
    this.bebeService.getBebes().subscribe({
      next: (response: any) => {
        console.log(response);
        this.bebes = response.data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    this.contact_id = Number(this.route.snapshot.params['id']);
    this.contactoService.getContactoById(this.contact_id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.Form.patchValue(response.data);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  updateContacto(): void {
    this.contactoService.updateContacto(this.Form.value, this.contact_id).subscribe({
      next: (response: any) => {
        console.log(response);
        setTimeout(() => {
          this.succesMessages.message = 'Contacto actualizado con éxito';
          this.backendErrors.message = '';
          this.router.navigate(['/contacto']);
        }, 2000);
      },
      error: (error: any) => {
        console.log(error);
        this.backendErrors.message = 'Error para actualizar al contacto, intente mas tarde';
      }
    });
  }


}
