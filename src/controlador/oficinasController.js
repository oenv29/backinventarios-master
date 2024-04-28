import{crearOfinasModelo, obtenerDatoOficinaModelo,obtenerOficinasPorBloque} from "../modelo/oficinasModelo.js"

export const crearOficinacontroller = async (req,res) =>{
    try{
        let oficina = req.body;
        if(!oficina || !oficina.nombre || !oficina.id_bloque){
            return res.status(400).json({
                status: "error",
                message: "Faltan datos por enviar"
            });
        }
        try{
            
            let respuesta = await crearOfinasModelo(oficina.nombre, oficina.id_bloque);
            
            oficina.id = respuesta.insertId;
            if(respuesta){
                // devolver respuesta
                return res.status(200).json({
                    status: "success",
                    message: "Oficina creado con exito....",
                    oficina
                }); 
            }else{
                // devolver respuesta
                return res.status(400).json({
                    status: "error",
                    message: "No se a podido regitrar la oficina...",
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


export const traerOficinaController = async (req, res) =>{
    try{
        let dato = await obtenerDatoOficinaModelo();
        if(dato){
            return res.status(200).json({
                status: "sunset",
                bloques: dato
            })
        }else{
            return res.status(200).json({
                status: "sunset",
                mensaje: "no se encontro la oficina"
            });
        }
        

    }catch(error){
        return res.status(500).json({
            status:"error",
            mensaje: "ha ocurrido un error contactate con el administrador del sistema" + error
        });
    }
}


export const obtenerOficinaPorBlo = async (req,res) =>{

    try{
        let id = req.params.id

        let oficinas = await obtenerOficinasPorBloque(id)

        if(oficinas.length != 0){
            // devolver respuesta
            return res.status(200).json({
                status: "success",
                message: "Oficina",
                oficinas
            }); 
        }else{
            // devolver respuesta
            return res.status(400).json({
                status: "Error",
                message: "No se encontro oficinas",
            }); 
        }

    }catch(error){
        return res.status(500).json({
            status: "error",
            message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
        });
    }

}