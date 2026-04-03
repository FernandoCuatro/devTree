import mongoose, { Schema } from "mongoose"

// Esquema se asocia con el modelo
const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

// Definimos el modelo de usuario
const User = mongoose.model('User', userSchema)

export default User