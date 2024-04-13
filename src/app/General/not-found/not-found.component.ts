import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit{
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000);
  }

}
