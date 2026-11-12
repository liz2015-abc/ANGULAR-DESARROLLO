import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Usuario { id: number; nombre: string; email: string; }

@Injectable({ providedIn: 'root' })
export class TiendaApiService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/api/v1`;

  obtenerUsuarios() {
    return this.http.get<Usuario[]>(`${this.url}/usuario`);
  }
}
