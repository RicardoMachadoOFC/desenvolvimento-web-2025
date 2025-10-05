import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from './reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  // Usar URL absoluta do backend em desenvolvimento para evitar problemas de proxy/CORS
  // Mantenha ou altere para variável de ambiente em produção.
  private baseURL = 'http://localhost:8080/api/v1/reservas';
  constructor(private httpCliente: HttpClient) { }

  getReservaList(): Observable<Reserva[]>{
    return this.httpCliente.get<Reserva[]>(`${this.baseURL}`);
  }
}
