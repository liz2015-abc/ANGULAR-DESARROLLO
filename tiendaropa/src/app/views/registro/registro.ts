import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  private authService = inject(AuthService);
  private router = inject(Router);

  // Mensaje que se muestra en pantalla
  mensaje = signal('');

  // Recibe los valores escritos en los inputs #nombre, #correo y #clave
  registrar(nombre: string, email: string, password: string): void {
    if (!nombre || !email || password.length < 8) {
      this.mensaje.set('Ingresa nombre, correo y contraseña de mínimo 8 caracteres');
      return;
    }

    this.authService.registrar(nombre, email, password).subscribe({
      next: (respuesta) => {
        alert(respuesta.message);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.mensaje.set(error.error?.message ?? 'No se pudo conectar con el servidor');
      }
    });
  }
}
