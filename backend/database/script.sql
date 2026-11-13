-- Script de base de datos - Tienda de Ropa
-- Crea las tablas que usan los modelos del backend:
--   usuarios -> src/models/auth.model.ts
--   perritos -> src/models/perrito.model.ts

-- Tabla de usuarios (registro e inicio de sesión)
CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL
);

-- Tabla de perritos
CREATE TABLE IF NOT EXISTS perritos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  color VARCHAR(50) NOT NULL,
  edad INTEGER NOT NULL,
  raza VARCHAR(100) NOT NULL
);

-- Perritos de ejemplo
INSERT INTO perritos (nombre, color, edad, raza) VALUES
  ('Max', 'Café', 3, 'Labrador'),
  ('Luna', 'Blanco', 2, 'Poodle'),
  ('Rocky', 'Negro', 4, 'Pastor Alemán');
