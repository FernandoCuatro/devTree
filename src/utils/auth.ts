import bcrypt from "bcrypt";

// funciones para hashear
export const hashPassword = async (password : string) => {
    // console.log(password);
    
    // un salt es una cadena de caracteres aleatorias
    // diferente resultados aunque sea la misma contrasenia
    const salt = await bcrypt.genSalt(10)

    // Volvemos a usar un await porque necesitamos que el salt se ejecute correctamete
    return await bcrypt.hash(password, salt)
}

// funcion para comparar
// la contraseña
export const checkPassword = async (password : string, hash: string) => {
    // console.log(password);
    // console.log(hash);

    // Ahora vamos a comparar las contrasenias
    // usamos el async await 
    // para bloquear el codigo hasta que se genere una respuesta
    const result = await bcrypt.compare(password, hash)
    // console.log(result); true or false
    
    return result
}
