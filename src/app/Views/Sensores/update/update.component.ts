import { Component } from '@angular/core';
import { ToolbarComponent } from '../../../General/toolbar/toolbar.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ToolbarComponent, RouterLink],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

}
