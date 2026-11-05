import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private authService = inject(AuthService);
  private router = inject(Router);

  // Datos del formulario (conectados con ngModel)
  email = '';
  password = '';

  // Mensaje que se muestra en pantalla
  mensaje = signal('');

  ingresar(): void {
    if (!this.email || !this.password) {
      this.mensaje.set('Ingresa correo y contraseña');
      return;
    }

    this.authService.ingresar(this.email, this.password).subscribe({
      next: (respuesta) => {
        console.log('Usuario que inició sesión:', respuesta.usuario);
        this.router.navigate(['/inicio']);
      },
      error: (error) => {
        this.mensaje.set(error.error?.message ?? 'No se pudo conectar con el servidor');
      }
    });
  }
}
