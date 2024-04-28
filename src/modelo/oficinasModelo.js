import { conexion } from "../bd/bd.js";


export const crearOfinasModelo = async (nombre, id_bloque) =>{
    try{
        const [respuesta] = await conexion.query("INSERT INTO oficnas (nombre, id_bloque) VALUES (?,?)",[nombre, id_bloque]);
        return respuesta;
    }catch(error){
        return error;
    }
}


// Función para obtener los datos de la tabla "oficina"
export const obtenerDatoOficinaModelo = async () =>{
    try{
        const [respuesta] = await conexion.query("SELECT * FROM oficnas");
        return respuesta;
    }catch(error){
        return error;
    }
}

export const obtenerOficinasPorBloque = async (id_bloque) =>{
    try{
        const [empleado] = await conexion.query('SELECT * FROM oficnas WHERE estado = 1 and id_bloque = ?',[id_bloque]);	
        return empleado;
    }catch(error){
        return error;
    }
}