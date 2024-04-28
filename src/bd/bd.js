import { createPool } from "mysql2/promise";

let conexion;

try{
    conexion = createPool({
        host:'localhost',
        user:'root',
        password:'',
        port:3306,
        database:'gestioninventario'
    });

    const conet = await conexion.getConnection();
    if(conet){
        console.log("Conexio exitosa...")
    }

}catch(error){
    console.log("Error en la conexion de la base de datos: ",error)
}

export {conexion};