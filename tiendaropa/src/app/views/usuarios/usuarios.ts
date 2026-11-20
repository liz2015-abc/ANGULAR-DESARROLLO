import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TiendaApiService, Usuario } from '../../services/tienda-api.service';
import { TablaGenerica } from '../../components/tabla-generica/tabla-generica';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [AsyncPipe, TablaGenerica],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios {

  readonly registros$: Observable<Usuario[]>;

  titulos = ['ID', 'Nombre', 'Correo'];
  columnas = ['id', 'nombre', 'email'];

  // Angular nos entrega el servicio a través del constructor
  constructor(private api: TiendaApiService) {
    // Se inicializa aquí porque necesita el servicio que llega en el constructor
    this.registros$ = this.api.obtenerUsuarios();
  }
}
