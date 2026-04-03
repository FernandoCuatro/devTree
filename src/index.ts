// Para el manejo de los colores
import colors from 'colors'
import server from './server'

// Como estamos en pruebas podemos asigarlo
// Pero si vamos a produccion el hosting nos asigna uno y no sabemos cual es
// con la variable de entorno de puerto que es global
const port = process.env.PORT || 4000

// Creamos el servidor
// puerto y callback
server.listen(port, () => {
    console.log( colors.bgBlue.magenta.italic(`Servidor Funcionando en el puerto: ${port}`)); 
})

// En el navegador
// http://localhost:4000/

// Ts
let productName = "tablet"
let isAuth = false
let price = 30

// Creamos un type
// Y describimos la estructura
// Se fuerza una structura ya establecidas
type Product = {
    id: number
    price: number
    name: string
}

// Para una interface
interface ProductInterface {
    id: number
    price: number
    name: string
}

// Con las interfaces se puede hacer que extienda de otra interface
// Pero puedes extender tambien a un type
interface FullProduct extends Product {
    image: string
}

// Si lo hacemos con un type, tambien se puede hacer
type FullProducts = ProductInterface & {
    image: string
}

interface ProductoID {
    id: number
}

// Los types tienen los utilityTypes
// por ejmplo el Pick para establecerle un type directamente

// Se le asigna con los dos puntos el type
// let product : Product = {
let product = {
    id: 1,
    price: 30,
    name: "tablet"
}

// let product2 : ProductInterface = {
let product2 = {
    id: 2,
    price: "30",
    name: "Televisor"
}