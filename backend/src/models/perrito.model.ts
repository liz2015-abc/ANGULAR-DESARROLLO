import { pool } from '../db';

export interface Perrito {
  id?: number;
  nombre: string;
  color: string;
  edad: number;
  raza: string;
}

export const consultarPerritos = async (): Promise<Perrito[]> => {
  const resultado = await pool.query(
    'SELECT id, nombre, color, edad, raza FROM perritos ORDER BY id'
  );

  return resultado.rows;
};

export const guardarPerrito = async (
  perrito: Omit<Perrito, 'id'>
): Promise<Perrito> => {

  const { nombre, color, edad, raza } = perrito;

  const resultado = await pool.query(
    `INSERT INTO perritos (nombre, color, edad, raza)
     VALUES ($1, $2, $3, $4)
     RETURNING id, nombre, color, edad, raza`,
    [nombre, color, edad, raza]
  );

  return resultado.rows[0];
};