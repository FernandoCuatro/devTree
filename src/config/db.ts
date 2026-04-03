import mongoose from 'mongoose'
import colors from 'colors'

// console.log(process.env);
export const connectDB = async () => {
    try {
        // Si la base de datos no existe, la va a crear
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        
        const url = `${connection.host}:${connection.port}`
        console.log( colors.cyan.bold( `MongoDB Conectado en ${url}` ) );
    } catch (error) {
        console.log( colors.bgRed.white.bold( error ) );
        // Si le ponemos el 1 quiere decir que salimos con un error
        process.exit(1)
    }
}