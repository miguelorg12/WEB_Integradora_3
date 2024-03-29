import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink,ToolbarComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

}
