import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Usuario { id: number; nombre: string; email: string; }

@Injectable({ providedIn: 'root' })
export class TiendaApiService {
  constructor(private http: HttpClient) {}
  private readonly url = `${environment.apiUrl}/api/v1`;

  obtenerUsuarios() {
    return this.http.get<Usuario[]>(`${this.url}/usuario`);
  }
}
