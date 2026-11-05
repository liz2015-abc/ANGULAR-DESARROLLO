import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  private authService = inject(AuthService);
  private router = inject(Router);

  // Datos del formulario (conectados con ngModel)
  nombre = '';
  email = '';
  password = '';

  // Mensaje que se muestra en pantalla
  mensaje = signal('');

  registrar(): void {
    if (!this.nombre || !this.email || this.password.length < 8) {
      this.mensaje.set('Ingresa nombre, correo y contraseña de mínimo 8 caracteres');
      return;
    }

    this.authService.registrar(this.nombre, this.email, this.password).subscribe({
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
