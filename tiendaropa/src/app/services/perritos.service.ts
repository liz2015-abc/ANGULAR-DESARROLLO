import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Perrito {
  id: number;
  nombre: string;
  color: string;
  edad: number;
  raza: string;
}

@Injectable({
  providedIn: 'root'
})
export class PerritosService {

  private http = inject(HttpClient);

  private url = 'http://localhost:3000/api/perritos';

  getPerritos(): Observable<Perrito[]> {
    return this.http.get<Perrito[]>(this.url);
  }

  crearPerrito(perrito: Omit<Perrito, 'id'>) {
    return this.http.post<Perrito>(this.url, perrito);
  }
}