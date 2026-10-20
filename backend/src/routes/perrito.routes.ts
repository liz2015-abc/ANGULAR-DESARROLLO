import { Router } from 'express';

import {
  obtenerPerritos,
  crearPerrito
} from '../controllers/perrito.controller';

const router = Router();

router.get('/', obtenerPerritos);

router.post('/', crearPerrito);

export default router;