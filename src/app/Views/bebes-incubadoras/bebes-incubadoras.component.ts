import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SideToolComponent } from '../../General/side-tool/side-tool.component'; 

@Component({
  selector: 'app-bebes-incubadoras',
  standalone: true,
  imports: [MatIconModule, RouterLink, SideToolComponent, CommonModule],
  templateUrl: './bebes-incubadoras.component.html',
  styleUrl: './bebes-incubadoras.component.css'
})
export class BebesIncubadorasComponent {
  cardGroups = [3]

}
