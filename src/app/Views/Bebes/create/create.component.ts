import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink, ToolbarComponent, MatDatepickerModule
    , MatNativeDateModule, MatFormFieldModule, MatInputModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

}
