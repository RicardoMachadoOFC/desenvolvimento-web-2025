import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Post {
  autor: string;
  conteudo: string;
  likes: number;
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">

      <div class="card p-3 mb-3">
        <h4>{{ nome }}</h4>
        <button class="btn btn-primary mb-2" (click)="alternarBio()">
          {{ mostrarBio ? 'Ocultar Perfil' : 'Mostrar Perfil' }}
        </button>
        <p *ngIf="mostrarBio">{{ bio }}</p>


        <div class="mb-2">
          <input class="form-control mb-1" [(ngModel)]="novoNome" placeholder="Editar nome">
          <button class="btn btn-success btn-sm" (click)="confirmarNome()">Confirmar Nome</button>
        </div>
        <div class="mb-2">
          <input class="form-control mb-1" [(ngModel)]="novaBio" placeholder="Editar bio">
          <button class="btn btn-success btn-sm" (click)="confirmarBio()">Confirmar Bio</button>
        </div>
      </div>


      <div class="card p-3 mb-3">
        <h4>Contador: {{ contador }}</h4>
        <input type="number" class="form-control mb-2" [(ngModel)]="passo" placeholder="Passo">
        <button class="btn btn-success me-2" (click)="incrementar()">+</button>
        <button class="btn btn-danger" (click)="decrementar()">-</button>
      </div>


      <div class="card p-3 mb-3">
        <h4>Adicionar Post</h4>
        <input class="form-control mb-2" #autor placeholder="Autor">
        <input class="form-control mb-2" #conteudo placeholder="Conteúdo">
        <button class="btn btn-primary mb-3"
                (click)="adicionarPost(autor.value, conteudo.value); autor.value=''; conteudo.value=''">
          Publicar
        </button>

        <!-- Filtros -->
        <input class="form-control mb-2" [(ngModel)]="filtroAutor" placeholder="Filtrar por autor">
        <input class="form-control mb-2" [(ngModel)]="filtroConteudo" placeholder="Filtrar por conteúdo">

        <!-- Feed -->
        <div *ngFor="let post of postsFiltrados" class="card p-2 mb-2">
          <h6>{{ post.autor }}</h6>
          <p>{{ post.conteudo }}</p>
          <button class="btn btn-sm btn-primary" (click)="curtir(post)">
            Curtir ({{ post.likes }})
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      max-width: 600px;
      margin: auto;
    }
  `]
})
export class PerfilComponent {

  nome: string = 'Ester';
  bio: string = 'Apaixonada por React';
  mostrarBio: boolean = true;


  novoNome: string = this.nome;
  novaBio: string = this.bio;


  contador: number = 0;
  passo: number = 1;


  posts: Post[] = [
    { autor: 'Ester', conteudo: 'Apaixonada por React', likes: 0 },
    { autor: 'Ricardo', conteudo: 'Estudando Angular', likes: 0 },
    { autor: 'Ana', conteudo: 'Programação é incrível!', likes: 0 }
  ];


  filtroAutor: string = '';
  filtroConteudo: string = '';


  alternarBio() {
    this.mostrarBio = !this.mostrarBio;
  }


  confirmarNome() {
    this.nome = this.novoNome;
  }

  confirmarBio() {
    this.bio = this.novaBio;
  }

  // Contador
  incrementar() {
    this.contador += this.passo;
  }

  decrementar() {
    this.contador -= this.passo;
  }

  // Feed
  curtir(post: Post) {
    post.likes++;
  }

  adicionarPost(autor: string, conteudo: string) {
    if (!autor || !conteudo) return;
    this.posts.unshift({ autor, conteudo, likes: 0 });
  }

  get postsFiltrados() {
    return this.posts.filter(p =>
      p.autor.toLowerCase().includes(this.filtroAutor.toLowerCase()) &&
      p.conteudo.toLowerCase().includes(this.filtroConteudo.toLowerCase())
    );
  }
}
