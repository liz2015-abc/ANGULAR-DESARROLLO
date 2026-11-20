import { Router } from 'express';
import { obtenerUsuarios } from '../controllers/usuario.controller';

const router = Router();

// GET /api/v1/usuario
router.get('/', obtenerUsuarios);

export default router;
