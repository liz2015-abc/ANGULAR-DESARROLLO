import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';

@Component({
  imports: [MenuComponent, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  // true = se muestra el menú lateral; false = se oculta (login y registro)
  protected mostrarMenu = signal(true);

  // Angular nos entrega el Router a través del constructor
  constructor(private router: Router) {
    // Cada vez que cambia la ruta, revisamos si estamos en login o registro
    this.router.events.subscribe((evento) => {
      if (evento instanceof NavigationEnd) {
        const ruta = evento.urlAfterRedirects;
        this.mostrarMenu.set(ruta !== '/login' && ruta !== '/registro');
      }
    });
  }
}
