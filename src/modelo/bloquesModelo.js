import { conexion } from "../bd/bd.js";


export const crearBloquesModelos = async (nombre) =>{
    try{
        const [respuesta] = await conexion.query("INSERT INTO bloques (nombre) VALUES (?)",[nombre]);
        return respuesta;
    }catch(error){
        return error;
    }
}


// Función para obtener los datos de la tabla "bloque"
export const obtenerDatosTablaBloquesModelos = async () =>{
    try{
        const [respuesta] = await conexion.query("SELECT * FROM bloques");
        return respuesta;
    }catch(error){
        return error;
    }
}