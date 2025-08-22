import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { NovaReserva } from './pages/nova-reserva/nova-reserva';
import { ListaReservas } from './pages/lista-reservas/lista-reservas';
import { PainelFuncionario } from './pages/painel-funcionario/painel-funcionario';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'nova-reserva', component: NovaReserva },
  { path: 'lista-reservas', component: ListaReservas },
  { path: 'painel-funcionario', component: PainelFuncionario },
  { path: '**', redirectTo: '' },
];
