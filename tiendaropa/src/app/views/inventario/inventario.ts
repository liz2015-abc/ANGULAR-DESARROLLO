import { Component } from '@angular/core';
import { PRENDAS_DATA } from '../../models/prendas';
import { TablaGenerica } from '../../components/tabla-generica/tabla-generica';

@Component({
  imports: [TablaGenerica],
  selector: 'app-inventario',
  styleUrl: './inventario.css',
  templateUrl: './inventario.html',
})
export class Inventario {
  titulos = ['ID', 'Prenda', 'Talla', 'Cantidad disponible'];
  columnas = ['id', 'nombre', 'talla', 'cantidad'];

  readonly existencias = PRENDAS_DATA.map((prenda, indice) => ({
    ...prenda,
    cantidad: [12, 8, 5, 10, 7, 6, 9, 11, 4, 8][indice],
  }));
}
