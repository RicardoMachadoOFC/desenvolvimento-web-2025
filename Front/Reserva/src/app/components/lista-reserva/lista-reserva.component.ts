import { ReservaService } from './../../reserva.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reserva } from '../../reserva';


@Component({
  selector: 'app-lista-reserva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-reserva.component.html',
  styleUrls: ['./lista-reserva.component.css'] // corrigido
})
export class ListaReservaComponent implements OnInit {
  reserva: Reserva[] = [];
  loading: boolean = false;
  error: string | null = null;
  // rawData removido depois do debug

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    console.log('ListaReservaComponent iniciado'); // teste
    this.getReserva();
  }

  formatHorario(r: Reserva): string {
  // Prioriza horarioReserva (do backend), se for nulo, usa horario antigo
  const raw = r.horarioReserva ?? r.horario;
  if (!raw) return 'Sem horário';

  const d = new Date(raw);

  if (isNaN(d.getTime())) {
    return raw; // Caso o formato seja inválido
  }

  // Formata data e hora: 05/10/2025 14:30
  const data = d.toLocaleDateString('pt-BR');
  const hora = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return `${data} ${hora}`;
}
  private getReserva() {
  this.loading = true;
  this.error = null;
    this.reservaService.getReservaList().subscribe({
      next: data => {
  console.log('Dados recebidos do backend:', data);
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
