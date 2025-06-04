import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = 'http://localhost:8081/auth';
  private tokenKey = 'token';

  constructor(private http: HttpClient ) {  }

login(username: string, password: string) {
  return this.http.post<{ token: string }>(`${this.baseUrl}/login`, { username, password })
    .pipe(
      tap((response: { token: string }) => {
               localStorage.setItem(this.tokenKey, response.token);
      })
    );
}

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey) ;
  }
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
