import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  // Mensaje que se muestra en pantalla (campos vacíos)
  mensaje = signal('');

  // Angular nos entrega el servicio y el Router a través del constructor
  constructor(private authService: AuthService, private router: Router) {}

  // Recibe los valores escritos en los inputs #correo y #clave
  ingresar(email: string, password: string): void {
    if (!email || !password) {
      this.mensaje.set('Ingresa correo y contraseña');
      return;
    }

    this.authService.ingresar(email, password).subscribe({
      next: (respuesta) => {
        console.log('Usuario que inició sesión:', respuesta.usuario);
        Swal.fire('Bienvenido', respuesta.message, 'success');
        this.router.navigate(['/inicio']);
      },
      error: (error) => {
        // Credenciales incorrectas (mensaje del backend) o error de conexión
        Swal.fire('Error', error.error?.message ?? 'No se pudo conectar con el servidor', 'error');
      }
    });
  }
}
