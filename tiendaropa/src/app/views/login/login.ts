import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private authService = inject(AuthService);
  private router = inject(Router);

  // Mensaje que se muestra en pantalla
  mensaje = signal('');

  // Recibe los valores escritos en los inputs #correo y #clave
  ingresar(email: string, password: string): void {
    if (!email || !password) {
      this.mensaje.set('Ingresa correo y contraseña');
      return;
    }

    this.authService.ingresar(email, password).subscribe({
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
