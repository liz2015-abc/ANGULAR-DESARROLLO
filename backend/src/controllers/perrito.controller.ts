import { Request, Response } from 'express';
import { pool } from '../db';

// GET: consultar todos los perritos
export const obtenerPerritos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const resultado = await perritosModel.obtenerPerritos();

    res.json(resultado.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al consultar los perritos'
    });
  }
};

// POST: crear un perrito
export const crearPerrito = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
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

    const resultado = await pool.query(
      `INSERT INTO perritos (nombre, color, edad, raza)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [nombre, color, edad, raza]
    );

    res.status(201).json(resultado.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al crear el perrito'
    });
  }
};