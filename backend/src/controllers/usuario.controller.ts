import type { Request, Response } from 'express';
import type { Usuario } from '../models/usuario.model';
// Datos de ejemplo en memoria, igual que en el proyecto de referencia.
const datos: Usuario[] = [{id:1,nombre:'Ana Gómez',email:'ana@example.com'}, {id:2,nombre:'Carlos Pérez',email:'carlos@example.com'}];
export const obtenerUsuarios = (_req: Request, res: Response) => res.json(datos);
export const obtenerUsuarioPorId = (req: Request, res: Response) => {
  const dato = datos.find(item => item.id === Number(req.params.id));
  if (!dato) {res.status(404).json({message:'Registro no encontrado'}); return;}
  res.json(dato);
};
// Como en el ejemplo del compañero: las operaciones responden, pero no persisten cambios.
export const crearUsuario = (_req: Request, res: Response) => {res.status(201).json({message:'Registro creado con éxito'});};
export const actualizarUsuario = (_req: Request, res: Response) => {res.json({message:'Registro actualizado con éxito'});};
export const eliminarUsuario = (_req: Request, res: Response) => {res.json({message:'Registro eliminado con éxito'});};
