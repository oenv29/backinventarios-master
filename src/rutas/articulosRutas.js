import { Router } from "express";
import {obtenerOficinaPorBlo,crearAsignacioncontroller,obtenerAsigPorBloyOfi,obtenerAsigPorBlo,obtenerAsigPorOfi} from "../controlador/ArticuloController.js"


const rutaArticulo = Router();

rutaArticulo.get("/articulo/validar/:id", obtenerOficinaPorBlo)
rutaArticulo.post("/asignacion/crear", crearAsignacioncontroller)
rutaArticulo.get("/articulo/validarasignacion/:idb/:idf", obtenerAsigPorBloyOfi)
rutaArticulo.get("/articulo/validarasignacionblo/:idb", obtenerAsigPorBlo)
rutaArticulo.get("/articulo/validarasignacionofi/:idf", obtenerAsigPorOfi)


export default rutaArticulo;