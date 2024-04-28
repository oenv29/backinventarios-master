import { Router } from "express";
import { crearOficinacontroller, traerOficinaController,obtenerOficinaPorBlo } from "../controlador/oficinasController.js"


const rutaOficina = Router();

rutaOficina.post("/oficina/crear", crearOficinacontroller)
rutaOficina.get("/oficina/listar", traerOficinaController)
rutaOficina.get("/oficinabloque/listar/:id", obtenerOficinaPorBlo)


export default rutaOficina;