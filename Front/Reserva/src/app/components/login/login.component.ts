import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  fazerLogin() {
    const loginData = { email: this.email, senha: this.senha };

    this.http.post('http://localhost:8080/api/v1/login', loginData, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          console.log(' Login realizado com sucesso!', res);

          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error(' Erro no login:', err);
          alert('Credenciais inválidas');
        }
      });
  }
}
