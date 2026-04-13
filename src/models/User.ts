import mongoose, { Schema } from "mongoose"

// Que sea un espejo a la Schema
interface IUser {
    handle: string
    name: string
    email: string
    password: string
}

// Esquema se asocia con el modelo
const userSchema = new Schema ({
    handle: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

// Definimos el modelo de usuario
const User = mongoose.model<IUser>('User', userSchema)
// Usamos Generate despues del metodo

export default User