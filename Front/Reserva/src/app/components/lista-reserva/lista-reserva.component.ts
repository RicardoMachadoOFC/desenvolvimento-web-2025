import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reserva } from '../../reserva';

@Component({
  selector: 'app-lista-reserva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-reserva.component.html',
  styleUrl: './lista-reserva.component.css'
})
export class ListaReservaComponent implements OnInit {
  reserva: Reserva[] = [];
    constructor() { }


  ngOnInit(): void {
    this.reserva = [{
      "id": 1,
      "nome": "João",
      "horario": "10:00"
    },

    {"id": 2,
      "nome": "Maria",
      "horario": "11:30"

    },
    {"id": 3,
       "nome": "Carlos",
        "horario": "14:00"
      }

    ];
  }

}


