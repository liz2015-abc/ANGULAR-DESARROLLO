import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  // Mensaje que se muestra en pantalla (campos vacíos)
  mensaje = signal('');

  // Angular nos entrega el servicio y el Router a través del constructor
  constructor(private authService: AuthService, private router: Router) {}

  // Recibe los valores escritos en los inputs #nombre, #correo y #clave
  registrar(nombre: string, email: string, password: string): void {
    if (!nombre || !email || password.length < 8) {
      this.mensaje.set('Ingresa nombre, correo y contraseña de mínimo 8 caracteres');
      return;
    }

    this.authService.registrar(nombre, email, password).subscribe({
      next: (respuesta) => {
        Swal.fire('Cuenta creada', respuesta.message, 'success');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        // Correo ya registrado (mensaje del backend) o error de conexión
        Swal.fire('Error', error.error?.message ?? 'No se pudo conectar con el servidor', 'error');
      }
    });
  }
}
