import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TiendaApiService } from '../../services/tienda-api.service';
@Component({selector:'app-usuarios', standalone:true, imports:[AsyncPipe], templateUrl:'./usuarios.html', styleUrl:'./usuarios.css'})
export class Usuarios {
  private readonly api = inject(TiendaApiService);
  readonly registros$ = this.api.obtenerUsuarios();
}
