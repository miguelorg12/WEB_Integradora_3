import { Component } from '@angular/core';
import { SideToolComponent } from '../../General/side-tool/side-tool.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideToolComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
