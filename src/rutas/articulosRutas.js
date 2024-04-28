import { Router } from "express";
import {obtenerOficinaPorBlo,crearAsignacioncontroller} from "../controlador/ArticuloController.js"


const rutaArticulo = Router();

rutaArticulo.get("/articulo/validar/:id", obtenerOficinaPorBlo)
rutaArticulo.post("/asignacion/crear", crearAsignacioncontroller)


export default rutaArticulo;