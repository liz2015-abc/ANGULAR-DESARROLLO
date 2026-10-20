import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuario.routes';
import perritoRoutes from './routes/perrito.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();

// Configuración
app.use(cors());
app.use(express.json());

// Verificar servidor
app.get('/api/v1/health', (_req, res) => {
  res.json({ status: 'OK' });
});

// Rutas
app.use('/api/v1/usuario', usuarioRoutes);
app.use('/api/perritos', perritoRoutes);

// Manejo de errores
app.use(errorHandler);

export default app;
