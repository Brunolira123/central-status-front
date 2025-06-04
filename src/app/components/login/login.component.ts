import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/aut/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

 login() {
    this.errorMessage = '';
    if (this.username && this.password.length >= 4) {
      this.authService.login(this.username, this.password).subscribe({
        next: () => {
          console.log('Login bem-sucedido!');
          this.router.navigate(['/painel']);
        },
        error: (err) => {
          console.error('Erro no login', err);
          this.errorMessage = err.status === 401
            ? 'Usuário ou senha inválidos!'
            : 'Usuário ou senha inválidos!';
        }
      });
    } else {
      this.errorMessage = 'Preencha corretamente os campos.';
    }
  }

  logout() {
    if (this.authService.getToken()) {
      if (confirm('Tem certeza que deseja sair?')) {
        this.authService.logout();
        this.router.navigate(['/']);
      }
    }
  }

}
