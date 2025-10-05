import { Component } from '@angular/core';
import { ListaReservaComponent } from "./components/lista-reserva/lista-reserva.component";
import { RouterOutlet } from "../../node_modules/@angular/router/index";

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [ListaReservaComponent, RouterOutlet],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {
  id: number = 0;
  Nome: string = ' ';
  horarioReserva: string = '';

}
