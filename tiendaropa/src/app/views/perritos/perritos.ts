import { Component, OnInit } from '@angular/core';
import { PerritosService, Perrito } from '../../services/perritos.service';
import { TablaGenerica } from '../../components/tabla-generica/tabla-generica';

@Component({
  selector: 'app-perritos',
  standalone: true,
  imports: [TablaGenerica],
  templateUrl: './perritos.html',
  styleUrl: './perritos.css'
})
export class Perritos implements OnInit {

  perritos: Perrito[] = [];

  titulos = ['ID', 'Nombre', 'Color', 'Edad', 'Raza'];
  columnas = ['id', 'nombre', 'color', 'edad', 'raza'];

  // Angular nos entrega el servicio a través del constructor
  constructor(private perritosService: PerritosService) {}

  ngOnInit(): void {
    this.obtenerPerritos();
  }

  obtenerPerritos(): void {
    this.perritosService.getPerritos().subscribe({
      next: (datos) => {
        this.perritos = datos;
        console.log('Perritos consultados desde el backend:', datos);
      },
      error: (error) => {
        console.error('Error al consultar perritos:', error);
      }
    });
  }
}
