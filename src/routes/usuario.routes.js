import { Router } from "express";
import {getUsuario} from '../controllers/usuario.controllers'

const router = Router();

router.get('/Usuario',getUsuario)

export default router