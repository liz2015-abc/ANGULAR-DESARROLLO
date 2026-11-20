import { Request, Response } from 'express';
import { consultarUsuarios } from '../models/usuario.model';

// Obtener la lista de usuarios desde el modelo
export const obtenerUsuarios = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const usuarios = await consultarUsuarios();

    res.status(200).json(usuarios);

  } catch (error) {
    console.error('Error al consultar usuarios:', error);

    res.status(500).json({
      message: 'Error al consultar los usuarios'
    });
  }
};
