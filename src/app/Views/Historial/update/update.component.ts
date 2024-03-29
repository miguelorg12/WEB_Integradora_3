import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterLink,ToolbarComponent],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

}
