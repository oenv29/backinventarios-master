import {validarExisteArticulo,crearAsignacionModelo,validarExisteArticuloAsigOfiBloque,validarExisteArticuloAsigBloque,validarExisteArticuloAsigOficina} from '../modelo/ArticuloModelo.js'


export const obtenerOficinaPorBlo = async (req,res) =>{

    try{
        let id = req.params.id

        let articulo = await validarExisteArticulo(id)
        // devolver respuesta
        return res.status(200).json({
            status: "success",
            contar:articulo.length
        }); 
        

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


export const obtenerAsigPorBloyOfi = async (req,res) =>{

    try{
        let id = req.params

        let asig = await validarExisteArticuloAsigOfiBloque(id.idb,id.idf)
        // devolver respuesta
        return res.status(200).json({
            status: "success",
            asig
        }); 

    }catch(error){
        return res.status(500).json({
            status: "error",
            message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
        });
    }

}

export const obtenerAsigPorBlo = async (req,res) =>{

    try{
        let id = req.params

        let asig = await validarExisteArticuloAsigBloque(id.idb)
        // devolver respuesta
        return res.status(200).json({
            status: "success",
            asig
        }); 

    }catch(error){
        return res.status(500).json({
            status: "error",
            message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
        });
    }

}

export const obtenerAsigPorOfi = async (req,res) =>{

    try{
        let id = req.params

        let asig = await validarExisteArticuloAsigOficina(id.idf)
        // devolver respuesta
        return res.status(200).json({
            status: "success",
            asig
        }); 

    }catch(error){
        return res.status(500).json({
            status: "error",
            message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
        });
    }

}