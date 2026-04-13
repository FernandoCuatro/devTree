// Importamos Express - common Js
// const express = require('express'); // CJS Common Js
import express from 'express' // ESM Ecmascript modules 
// console.log(express);

// Para el manejo de las variables de entorno
import 'dotenv/config'

// Importamos el router
import router from './router'

// La base de datos con mongo
import { connectDB } from './config/db'
connectDB()

// Instancia de express, instancia del servidor
const app = express()

// este es un middleware, entrada de datos
// Habilitamos la lectura de datos
app.use(express.json())

// Cada que hay una funcion dentra a los metodos en el router y mapearlo
app.use('/', router)
// app.use('/api', router)

export default app