// Funciones para mandarlas a llamar en el routers
import { Request, Response } from "express";
import slug from "slug"
import { validationResult } from "express-validator";

import User from "../models/User"
import { checkPassword, hashPassword } from "../utils/auth";

// funcion asicrona para crear la cuenta del usuario
export const createAccount = async (req : Request, res : Response) => {
    // console.log('desde registro');

    // Aqui vamos a obtener la infromacion que el usuario envia
    // recuperamos en el envio
    // console.log(req.body);

    // Se puede hacer con promise pero el await es mas comodo
    // por lo tanto la funcion tiene que ser asincrona 
    // await User.create(req.body)

    // Usamos el MiddleWare para validar
    // pero lo vamos a usar a nivel de ruta

    // Vamos revisar que el correo no este registroado
    const { email, password } = req.body
    // console.log(email)
    
    const userExist = await User.findOne({email})
    // console.log(userExist);
    
    // Si no es null, quiere decir que si existe
    if (userExist) {
        const error = new Error('El correo electrónico ya esta registrado')

        // No quiero sacar status 200, porque quiere decir que todo esta okey
        // 409 es un conflicto
        return res.status(409).json({error: error.message})
    }

    // pasamos a slug para verificar el usuario
    // con el segundo parametro le decimos que lo queremos sin espacio
    // en todo casi si lo quisieramos, ahi podemos agregar - o _
    // console.log( slug(handle, '') );

    // Validamos que el handle no exista
    const handle = slug(req.body.handle, '')

    const handleExist = await User.findOne({handle})
    // Validamos que no exista ningun usuario con ese nombres
    if (handleExist) {
        const error = new Error('Nombre de usuario no disponible')

        // Sacamos el error con estado 409 que es de conficto
        return res.status(409).json( { error: error.message } )
    }

    // La otra forma es haciendo la isntancia de los datos
    const user = new User(req.body)
    // Ahora vamos a hashear la contrasenia
    // usamos dependencia bcrypt
    user.password = await hashPassword(password)

    // establecemos el handle para el usuario
    user.handle = handle

    await user.save()

    // finalizamos la ejecucuion del codigo
    // respuestas mas comunes
    // Creando una vista cuando hay uin template
    // res.render()

    // Enviar datos
    // el 201 quiere decir que se creo correctamente
    res.status(201).send({mensaje: 'Registro creado correctamente'})

    // Ahora enviamos en json
    // res.send('Registro creado correctamente')
}

// funcion para login
export const login = async (req : Request, res : Response) => {
    // console.log('desde login');

    // Usamos el MiddleWare para validar
    // pero lo vamos a usar a nivel de ruta

    const { email, password } = req.body

    // Revisamos si el usuario existe o no existe
    // Vamos revisar que el correo este registroado
    // console.log(email)
    
    const user = await User.findOne({email})
    // console.log(userExist);
    
    // Si no es null, quiere decir que si existe
    if (!user) {
        const error = new Error('El correo electrónico no esta registrado, regístrate.')

        // No quiero sacar status 200, porque quiere decir que todo esta okey
        // 404 es que no existe
        return res.status(404).json({error: error.message})
    } 
    
    // Comprobar el password, que la contraseña es correcta
    // console.log(user);
    // console.log(user.password);
    const isPasswordCorrect = await checkPassword(password, user.password)

    if (!isPasswordCorrect) {
        const error = new Error('Las credenciales no son correctas')

        // No quiero sacar status 200, porque quiere decir que todo esta okey
        // 401 no este autorizado
        return res.status(401).json({error: error.message})
    } 

    // Si todo esta bien, sacamos una respuesta favorable
    res.send({mensaje: 'Autenticado'})
}
