import { Routes } from '@angular/router';
import { Inicio } from './views/inicio/inicio';
import { Usuarios } from './views/usuarios/usuarios';
import { Inventario } from './views/inventario/inventario';
import { Prendas } from './views/prendas/prendas';
import { Ventas } from './views/ventas/ventas';
import { Compras } from './views/compras/compras';

export const routes: Routes = [

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'usuarios', component: Usuarios },
  { path: 'inventario', component: Inventario },
  { path: 'prendas', component: Prendas },
  { path: 'ventas', component: Ventas },
  { path: 'compras', component: Compras }

];
