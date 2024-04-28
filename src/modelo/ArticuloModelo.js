import { conexion } from "../bd/bd.js";


export const validarExisteArticulo = async (id_articulo) =>{
    try{
        const [articulo] = await conexion.query('SELECT * FROM asignararticulos WHERE estado = 1 and id_articulo = ?',[id_articulo]);	
        return articulo;
    }catch(error){
        return error;
    }
}

export const crearAsignacionModelo = async (id_bloque,id_oficina,id_articulo) =>{
    try{
        const [respuesta] = await conexion.query("INSERT INTO asignararticulos (id_bloque, id_oficina,id_articulo) VALUES (?,?,?)",[id_bloque, id_oficina,id_articulo]);
        return respuesta;
    }catch(error){
        return error;
    }
}