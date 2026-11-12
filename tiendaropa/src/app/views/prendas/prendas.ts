import { Component } from '@angular/core';
import { PRENDAS_DATA } from '../../models/prendas';
import { TablaGenerica } from '../../components/tabla-generica/tabla-generica';

@Component({
  imports: [TablaGenerica],
  selector: 'app-prendas',
  styleUrl: './prendas.css',
  templateUrl: './prendas.html',
})
export class Prendas {
  titulos = ['Nombre', 'Id', 'Precio', 'Talla'];
  columnas = ['nombre', 'id', 'precio', 'talla'];
  prendas = PRENDAS_DATA;
}
