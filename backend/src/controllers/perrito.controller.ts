import { Request, Response } from 'express';
import {
  consultarPerritos,
  guardarPerrito
} from '../models/perrito.model';

export const obtenerPerritos = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const perritos = await consultarPerritos();

    res.status(200).json(perritos);

  } catch (error) {
    console.error('Error al consultar perritos:', error);

    res.status(500).json({
      message: 'Error al consultar los perritos'
    });
  }
};

export const crearPerrito = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Recibe los datos del frontend
    const { nombre, color, edad, raza } = req.body;

    if (
      typeof nombre !== 'string' || !nombre.trim() ||
      typeof color !== 'string' || !color.trim() ||
      !Number.isInteger(edad) || edad < 0 ||
      typeof raza !== 'string' || !raza.trim()
    ) {
      res.status(400).json({
        message: 'Los datos del perrito no son válidos'
      });
      return;
    }

    // Envía la información al modelo
    const nuevoPerrito = await guardarPerrito({
      nombre: nombre.trim(),
      color: color.trim(),
      edad,
      raza: raza.trim()
    });

    // Devuelve el registro creado
    res.status(201).json(nuevoPerrito);

  } catch (error) {
    console.error('Error al guardar perrito:', error);

    res.status(500).json({
      message: 'Error al guardar el perrito'
    });
  }
};