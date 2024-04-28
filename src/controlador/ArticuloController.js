import {validarExisteArticulo,crearAsignacionModelo} from '../modelo/ArticuloModelo.js'


export const obtenerOficinaPorBlo = async (req,res) =>{

    try{
        let id = req.params.id

        let articulo = await validarExisteArticulo(id)

        if(articulo.length == 0){
            // devolver respuesta
            return res.status(200).json({
                status: "success",
                contar:articulo.length
            }); 
        }

    }catch(error){
        return res.status(500).json({
            status: "error",
            message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
        });
    }

}

export const crearAsignacioncontroller = async (req,res) =>{
    try{
        let asignacion = req.body;
        if(!asignacion || !asignacion.id_bloque || !asignacion.id_oficina || !asignacion.id_articulo){
            return res.status(400).json({
                status: "error",
                message: "Faltan datos por enviar"
            });
        }
        try{
            
            let respuesta = await crearAsignacionModelo(asignacion.id_bloque, asignacion.id_oficina, asignacion.id_articulo);
            
            asignacion.id = respuesta.insertId;
            if(respuesta){
                // devolver respuesta
                return res.status(200).json({
                    status: "success",
                    message: "asignacion creado con exito....",
                    asignacion
                }); 
            }else{
                // devolver respuesta
                return res.status(400).json({
                    status: "error",
                    message: "No se a podido regitrar la asignacion...",
                });
            }
        }catch(error){
            return res.status(500).json({
                status: "error",
                message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
            });
    }

    }catch(error){
        return res.status(500).json({
            status: "error",
            message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
        });
    }

        
    
}