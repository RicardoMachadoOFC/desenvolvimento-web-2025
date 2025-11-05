export class Reserva {
  id: number = 0;
  nome: string = '';
  horario: string = '';
  // campo que o backend está retornando
  horarioReserva: string | null = null;
  email: string = '';
}
