import { Component } from '@angular/core';
import { PRENDAS_DATA } from '../../components/tabla/tabla';

@Component({
  imports: [],
  selector: 'app-inventario',
  styleUrl: './inventario.css',
  templateUrl: './inventario.html',
})
export class Inventario {
  readonly existencias = PRENDAS_DATA.map((prenda, indice) => ({
    ...prenda,
    cantidad: [12, 8, 5, 10, 7, 6, 9, 11, 4, 8][indice],
  }));
}
