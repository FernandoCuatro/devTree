import { Router } from 'express';
import { body } from "express-validator";
import { createAccount, login } from './handlers';
import { handleInputError } from './middleware/validation';

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
// pero antes validamos que los datos esten correctos 
// antes de ir a hacer todas las peticiones
router.post('/auth/register', 
    body('handle').notEmpty().withMessage('El handle no puede ir vacío'),
    body('name').notEmpty().withMessage('El nombre no puede ir vacío'),
    body('email').isEmail().withMessage('E-mail no valido'),
    body('password').isLength({ min: 8 }).withMessage('El password no puede ir vacío, mínimo 8 caracteres'),
    handleInputError,
    createAccount
)

// segunda ruta para peticiones
router.post('/auth/login', 
    body('email').isEmail().withMessage('E-mail no valido'),
    body('password').notEmpty().withMessage('El password no puede ir vacío'),
    handleInputError,
    login
)







export default router