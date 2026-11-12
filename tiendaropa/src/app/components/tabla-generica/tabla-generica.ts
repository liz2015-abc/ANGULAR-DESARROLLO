import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-generica',
  standalone: true,
  imports: [],
  templateUrl: './tabla-generica.html',
  styleUrl: './tabla-generica.css'
})
export class TablaGenerica {

  // Textos que se muestran en el encabezado de la tabla. Ej: ['ID', 'Nombre']
  @Input() titulos: string[] = [];

  // Nombres de las propiedades de cada registro. Ej: ['id', 'nombre']
  @Input() columnas: string[] = [];

  // Lista de registros que se muestran como filas
  @Input() datos: any[] = [];
}
