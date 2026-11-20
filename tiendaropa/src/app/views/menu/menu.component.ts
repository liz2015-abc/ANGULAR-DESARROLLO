import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { map } from 'rxjs/operators';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  imports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatIconModule,RouterLink,
    RouterOutlet],
})
export class MenuComponent {

  // true cuando la pantalla es de celular
  readonly isHandset: Signal<boolean>;

  // Angular nos entrega el BreakpointObserver y el Router a través del constructor
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    // Se inicializa aquí porque necesita el breakpointObserver que llega en el constructor
    this.isHandset = toSignal(
      this.breakpointObserver.observe(Breakpoints.Handset).pipe(map((result) => result.matches)),
      { initialValue: false },
    );
  }

  // Pregunta antes de salir; si el usuario confirma, regresamos a /login
  cerrarSesion(): void {
    Swal.fire({
      title: '¿Cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.router.navigate(['/login']);
      }
    });
  }
}
