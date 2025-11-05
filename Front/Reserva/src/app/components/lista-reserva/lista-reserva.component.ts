import { ReservaService } from './../../reservaConexao/reserva.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reserva } from '../../reservaConexao/reserva';


@Component({
  selector: 'app-lista-reserva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-reserva.component.html',
  styleUrls: ['./lista-reserva.component.css']
})
export class ListaReservaComponent implements OnInit {
  reserva: Reserva[] = [];
  loading: boolean = false;
  error: string | null = null;


  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    console.log('ListaReservaComponent iniciado'); // teste
    this.getReserva();
  }

  formatHorario(r: Reserva): string {
  // Prioriza horarioReserva do backend que estava dando problema
  const raw = r.horarioReserva ?? r.horario;
  if (!raw) return 'Sem horário';

  const d = new Date(raw);

  if (isNaN(d.getTime())) {
    return raw; // SE FOR INVALIDO
  }

  // Formata data e hora
  const data = d.toLocaleDateString('pt-BR');
  const hora = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return `${data} ${hora}`;
}
  private getReserva() {


  this.loading = true; //  aparece que esta carregando enquanto o backend ainda está começando a carregar

  this.error = null;

    this.reservaService.getReservaList().subscribe({
      next: data => {
  console.log('dados recebidos do backend:', data);
  this.reserva = data;
        this.loading = false;
      },


      error: err => {
        console.error('Erro ao buscar reservas:', err);
        this.error = (err && err.message) ? err.message : 'Erro desconhecido ao buscar reservas';
        this.loading = false;
      }
    });
  }
}
