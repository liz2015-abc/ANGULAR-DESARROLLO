import { Routes } from '@angular/router';
import { Inicio } from './views/inicio/inicio';
import { Prendas } from './views/prendas/prendas';
import { Inventario } from './views/inventario/inventario';
import { Usuarios } from './views/usuarios/usuarios';
import { Perritos } from './views/perritos/perritos';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'prendas', component: Prendas },
  { path: 'inventario', component: Inventario },
  { path: 'usuarios', component: Usuarios },
  { path: 'perritos', component: Perritos },
  { path: '**', redirectTo: 'inicio' }
];