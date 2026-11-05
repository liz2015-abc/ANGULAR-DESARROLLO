import { Routes } from '@angular/router';

import { Inicio } from './views/inicio/inicio';
import { Prendas } from './views/prendas/prendas';
import { Inventario } from './views/inventario/inventario';
import { Usuarios } from './views/usuarios/usuarios';
import { Perritos } from './views/perritos/perritos';

import { Login } from './views/login/login';
import { Registro } from './views/registro/registro';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'registro', component: Registro },

  { path: 'inicio', component: Inicio },
  { path: 'prendas', component: Prendas },
  { path: 'inventario', component: Inventario },
  { path: 'usuarios', component: Usuarios },
  { path: 'perritos', component: Perritos },

  { path: '**', redirectTo: 'login' }
];