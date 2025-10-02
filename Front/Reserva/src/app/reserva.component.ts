import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {
  id: number = 0;
  Nome: string = ' ';
  horarioReserva: string = '';

}
