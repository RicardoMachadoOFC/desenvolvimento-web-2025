import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReservaComponent } from './reservaConexao/reserva.component';
import { ListaReservaComponent } from './components/lista-reserva/lista-reserva.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';

export const routes: Routes = [
 {
    path: "login",
    component: LoginComponent
 },
   {
    path: "home",
    component: HomeComponent
   },

   {
    path: "lista-reserva",
    component: ListaReservaComponent

  },
  {
    path: "funcionarios",
    component: FuncionariosComponent
  },

   {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },



];
