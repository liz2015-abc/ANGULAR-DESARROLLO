import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


export interface Prenda {
  nombre: string;
  id: number;
  precio: number;
  talla: string;
}

export const PRENDAS_DATA: Prenda[] = [
  {id: 1, nombre: 'Camiseta básica', precio: 45000, talla: 'M'},
  {id: 2, nombre: 'Jean clásico', precio: 95000, talla: '32'},
  {id: 3, nombre: 'Chaqueta de cuero', precio: 180000, talla: 'L'},
  {id: 4, nombre: 'Vestido casual', precio: 120000, talla: 'S'},
  {id: 5, nombre: 'Blusa elegante', precio: 70000, talla: 'M'},
  {id: 6, nombre: 'Pantalón formal', precio: 110000, talla: '30'},
  {id: 7, nombre: 'Falda corta', precio: 65000, talla: 'S'},
  {id: 8, nombre: 'Buzo deportivo', precio: 90000, talla: 'L'},
  {id: 9, nombre: 'Short denim', precio: 60000, talla: 'M'},
  {id: 10, nombre: 'Camisa manga larga', precio: 85000, talla: 'L'},
];

@Component({
  imports: [MatTableModule],
  selector: 'app-tabla',
  styleUrl: './tabla.css',
  templateUrl: './tabla.html',
})

export class Tabla {displayedColumns: string[] = ['nombre', 'id', 'precio', 'talla'];
 datos = PRENDAS_DATA;}
