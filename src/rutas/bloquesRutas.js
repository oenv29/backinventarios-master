import { Router } from "express";
import {crearBloquesControlador, traerBloquesController} from "../controlador/bloquesController.js"

const router = Router();

router.post("/bloques/crear",crearBloquesControlador)
router.get("/bloques/listar", traerBloquesController)

export default router;