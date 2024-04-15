/**
 * Actividad de la clase:
 * 
 * 1era Parte
 * Crear un proyecto basado en expressJS, el cual cuente con un servidor que escuche en el puerto 8080. Ademas de configurar los siguientes endpoints.
 * El endpoint del método GET a la ruta '/bienvenida' deberá devolver un html con letras en color azul, en una string, dando la bienvenida.
 * El endpoint del método GET a la ruta '/usuario' deberá devolver un objeto con los datos de un usuario falso: {nombre, apellido, edad, correo}
 * 
 
 * Objeto Request -- con el res venimos solicitando una respuesta general, ahora con el request, vamos a generar una respuesta dirigida.
 * 
 * Al hacer los endpoints, hasta el momento solo hemos utilizado el elemento 'res', el cual utilizamos para responder a una petición.
 * 
 * Sin embargo, estos últimos ejercicios hemos dejado de lado el 'req' que viene a su izquierda, ahora abordaremos que utilidad tiene.
 * El objeto req cuenta con 3 propiedades principales:
 * 
 * 1) req.query: Como su nombre lo indica, query refiere a las multiples consultas que se pueden hacer a un determinado endpoint, basta conque en la url coloquemos el símbolo ?, entonces express reconocerá que hay que meter información al objeto req.query para poder utilizarlo en el endpoint. cuando buscamos algo en nuestro navegador, llamamos a un endpoint haciendo un determinado query.
 * IMPORTANTE
 * Conforme incrementa el dinamismo en las urls, es importante configurar el servidor para que reciba datos complejos desde la url, por ello hay que utilizar la linea: app.use(express.urlencoded({extended:true}))
 * La linea anterior permitirá que el servidor pueda interpretar mejor los datos complejos que viajen desde la url, y mapearlos correctamente en el req.query.
 * 
 * 2) req.params: Se utiliza cuando necesitamos obtener elementos dinámicos desde la ruta que esta llamando el cliente. para poder definir un 'parámetro' dentro de la * ruta a trabajar, basta con colocar el símbolo de dos puntos : antes del parámetro, de esta manera,express js reconoce que queremos que ese elemento sea dinámico. ej: '/usuario/:nombre'
 * 
 * 3) req.body --> se requiere postMan
 * 
 * IMPORTANTE: Si desconozco el numero de cosas que se van a consultar en mi ruta, la mejor opción es utilizar queries, mientras, que si solo necesito un numero especifico y reducido de parámetros, habría que optar por params

 * 3era Parte
 * 
 * Dado un arreglo de objetos de tipo usuario, realizar un servidor en express que permita obtener dichos usuarios.
 * La ruta raíz '/' debe devolver todos los usuarios.
 * La ruta /:userId debe devolver solo al usuario con dicho id.
 * 
 * 4ta Parte
 * Dado un arreglo de objetos de tipo usuario, vamos a hacer un filtro por genero.
 * La ruta raíz '/' debe devolver todos los usuarios pero ahora colocaremos un query param con ?, indicando que queremos un genero especifico. en caso de enviarlo sin query, debemos devolver a todos los usuarios.
 * 
 * 
 */

const express = require('express')
const app = express()
const PORT = 8080
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//1er Endpoint

app.get('/bienvenida', (req, res)=>{
    //lógica
    const respuesta = `<h1 style='color:blue'> Bienvenido a mi servidor!</h1>`
    //respuesta
    res.send(respuesta)
})
const users =[
    {
        id: 1,
        nombre:'Coder1',
        apellido:'House',
        edad:32,
        correo:`coder@house.com`,
        genero:'M',
    },
    {
        id:2,
        nombre:'Coder2',
        apellido:'House',
        edad:32,
        correo:`coder@house.com`,
        genero:'F',

    },
    {
        id: 3,
        nombre:'Coder3',
        apellido:'House',
        edad:32,
        correo:`coder@house.com`,
        genero:'F'

    }
]

// app.get('/', (req, res)=>{
//     //lógica

//     res.json(users)


// })
app.get('/:userId', (req, res)=>{
    //lógica
    const id = parseInt(req.params.userId)
    const usuario = users.find(user => id === user.id  )
    usuario ? res.send(usuario) : res.send({error:`No se encuentra el usuario con ese ID`})

    


})
app.get('/:nombre', (req, res)=>{
    //lógica
// si paso http://localhost:8080/coder me va  devolver "Bienvenido, coder"
    res.send(`Bienvenido, ${req.params.nombre}`)


})

app.get('/query', (req, res) =>{ 
// http://localhost:8080/query?nombre=Coder&apellido=House
// devuelve: {"nombre":"Coder","apellido":"House"}

    const consulta = req.query

    const {nombre, apellido, edad, correo } = req.query

    res.send(consulta)

})

app.get('/', (req, res)=>{

//http://localhost:8080/?genero=f
    const genero = req.query.genero ? req.query.genero.toUpperCase() : null;
    if (!genero ||(genero !== 'F' && genero!== 'M')) return res.send(users)
    const usersFiltrados = users.filter(usuario => usuario.genero === genero )
    res.send({Usuarios:usersFiltrados})

})



app.listen(PORT, ()=>{
    console.log(`Servidor running on PORT: ${PORT}`)
})