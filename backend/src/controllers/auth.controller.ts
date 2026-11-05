import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import {
  buscarCuenta,
  registrarCuenta
} from '../models/auth.model';

// REGISTRAR UN USUARIO
export const registro = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { nombre, email, password } = req.body;

    // Comprobar que los campos estén completos
    if (
      typeof nombre !== 'string' || !nombre.trim() ||
      typeof email !== 'string' || !email.trim() ||
      typeof password !== 'string' || password.length < 8
    ) {
      res.status(400).json({
        message: 'Ingresa nombre, correo y contraseña de mínimo 8 caracteres'
      });
      return;
    }

    const correo = email.trim().toLowerCase();

    // Verificar que el correo no esté registrado
    const cuentaExistente = await buscarCuenta(correo);

    if (cuentaExistente) {
      res.status(409).json({
        message: 'Este correo ya está registrado'
      });
      return;
    }

    // Proteger la contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // Enviar la información al modelo
    const nuevoUsuario = await registrarCuenta(
      nombre.trim(),
      correo,
      passwordHash
    );

    res.status(201).json({
      message: 'Cuenta creada correctamente',
      usuario: nuevoUsuario
    });

  } catch (error) {
    console.error('Error al registrar usuario:', error);

    res.status(500).json({
      message: 'Error al crear la cuenta'
    });
  }
};

// INICIAR SESIÓN
export const login = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (
      typeof email !== 'string' || !email.trim() ||
      typeof password !== 'string'
    ) {
      res.status(400).json({
        message: 'Ingresa correo y contraseña'
      });
      return;
    }

    // Buscar el usuario en el modelo
    const usuario = await buscarCuenta(
      email.trim().toLowerCase()
    );

    if (!usuario) {
      res.status(401).json({
        message: 'Correo o contraseña incorrectos'
      });
      return;
    }

    // Comparar la contraseña con el hash guardado
    const passwordCorrecta = await bcrypt.compare(
      password,
      usuario.password_hash
    );

    if (!passwordCorrecta) {
      res.status(401).json({
        message: 'Correo o contraseña incorrectos'
      });
      return;
    }

    res.status(200).json({
      message: 'Inicio de sesión correcto',
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email
      }
    });

  } catch (error) {
    console.error('Error al iniciar sesión:', error);

    res.status(500).json({
      message: 'Error al iniciar sesión'
    });
  }
};