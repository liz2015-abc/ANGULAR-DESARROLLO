import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerritosService, Perrito } from '../../services/perritos.service';

@Component({
  selector: 'app-perritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perritos.html',
  styleUrl: './perritos.css'
})
export class Perritos implements OnInit {

  private perritosService = inject(PerritosService);

  perritos: Perrito[] = [];

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