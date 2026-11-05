import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UsuarioAuth {
  id: number;
  nombre: string;
  email: string;
}

export interface RespuestaAuth {
  message: string;
  usuario: UsuarioAuth;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  private url = 'http://localhost:3000/api/v1/auth';

  registrar(nombre: string, email: string, password: string): Observable<RespuestaAuth> {
    return this.http.post<RespuestaAuth>(
      `${this.url}/registro`,
      { nombre, email, password }
    );
  }

  ingresar(email: string, password: string): Observable<RespuestaAuth> {
    return this.http.post<RespuestaAuth>(
      `${this.url}/login`,
      { email, password }
    );
  }
}