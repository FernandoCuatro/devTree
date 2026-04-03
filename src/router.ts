import { Router } from 'express';

// Todas las rutas para mandarlas a la aplicacion principal
const router = Router()

// router.get('/', (req, res) => {
//     // Imprimimos en pantalla
//     res.send('Hola mundo en Express / TypeScript')
// }) // principal

// En las configuraciones se puede colocar que usaras para base de datos, para vistas, para auth, formularios

// Routing, para el enrutamiento
// Cuando vas a una pagina web es una peticion de tipo get
// el callback para URL siempre toma un request y siempre un response

// app.get('/perfil', (req, res) => {
//     res.send('Este es el perfil')
// })

// autenticacion y registro
router.post('/auth/register', (req, res) => {
    // console.log('desde registro');

    // Aqui vamos a obtener la infromacion que el usuario envia
    // recuperamos en el envio
    console.log(req.body);
    
    
})




export default router