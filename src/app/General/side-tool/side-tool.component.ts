import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-side-tool',
  standalone: true,
  imports: [MatToolbarModule, 
            MatIconModule, 
            MatButtonModule, 
            MatSidenavModule, 
            MatListModule, 
            RouterLink, 
            RouterOutlet
            ],
  templateUrl: './side-tool.component.html',
  styleUrl: './side-tool.component.css'
})
export class SideToolComponent {

}
