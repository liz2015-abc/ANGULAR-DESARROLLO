import { pool } from '../db';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

// Consultar todos los usuarios (nunca se devuelve password_hash)
export const consultarUsuarios = async (): Promise<Usuario[]> => {
  const resultado = await pool.query(
    'SELECT id, nombre, email FROM usuarios ORDER BY id'
  );

  return resultado.rows;
};
