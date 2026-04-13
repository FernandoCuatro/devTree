import type {Request, Response, NextFunction} from 'express'
import { validationResult } from 'express-validator'

// middleware para validacion de entrada
export const handleInputError = (req : Request, res : Response, next: NextFunction) => {
    // Mostramos errores si vienen desde la validacion de los datos
    // Error de validacion en memoria y aqui los vamos a manejar
    let errors = validationResult(req)
    // console.log(error);
    // Si errores no esta vacio
    if ( !errors.isEmpty() ) {
        // http 400 peticion mala, error de cliente
        return res.status(400).json({ errors: errors.array() })
    }

    // Media vez termine de validar, que vaya a la siguiente función, cuando no existan errores
    next()
}