import { Component } from '@angular/core';

@Component({
  selector: 'app-code-verificacion',
  standalone: true,
  imports: [],
  templateUrl: './code-verificacion.component.html',
  styleUrl: './code-verificacion.component.css'
})
export class CodeVerificacionComponent {

  moveFocus(event: KeyboardEvent, nextInput: HTMLInputElement) {
    if ((event.target as HTMLInputElement).value.length === 1) {
      nextInput.focus();
    }
  }
}
