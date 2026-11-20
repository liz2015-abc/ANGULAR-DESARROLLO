import { Component } from '@angular/core';
import { TablaGenerica } from '../../components/tabla-generica/tabla-generica';

@Component({
  imports: [TablaGenerica],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {
  titulos = ['Sección', 'Descripción'];
  columnas = ['seccion', 'descripcion'];

  // Datos de ejemplo: describen las secciones de la tienda (no vienen de la base de datos)
  secciones = [
    { seccion: 'Prendas', descripcion: 'Listado de prendas con precio y talla' },
    { seccion: 'Inventario', descripcion: 'Cantidades disponibles por prenda' },
    { seccion: 'Usuarios', descripcion: 'Usuarios consultados desde el backend' },
    { seccion: 'Perritos', descripcion: 'Perritos consultados desde PostgreSQL' },
  ];
}
