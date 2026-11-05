import { pool } from '../db';

export interface Cuenta {
  id: number;
  nombre: string;
  email: string;
  password_hash: string;
}

// Buscar un usuario por correo
export const buscarCuenta = async (
  email: string
): Promise<Cuenta | undefined> => {
  const resultado = await pool.query<Cuenta>(
    'SELECT * FROM usuarios WHERE email = $1',
    [email]
  );

  return resultado.rows[0];
};

// Crear una cuenta nueva
export const registrarCuenta = async (
  nombre: string,
  email: string,
  passwordHash: string
): Promise<Omit<Cuenta, 'password_hash'>> => {
  const resultado = await pool.query(
    `INSERT INTO usuarios (nombre, email, password_hash)
     VALUES ($1, $2, $3)
     RETURNING id, nombre, email`,
    [nombre, email, passwordHash]
  );

  return resultado.rows[0];
};