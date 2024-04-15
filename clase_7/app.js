//Clase 7 - Servidores Web
/**
 * NodeJS: Entorno de ejecución de JS, es el corazón de nuestros programas.
 * Modulo: Conjunto de funciones y objetos que permiten resolver un problema especifico.
 * Modulo nativo: Módulos que vienen incluidos al instalar NodeJS, no requieren instalación solo importación.
 * package.json: Archivo de especificación del proyecto, sirve para contener las dependencias a utilizar en el proyecto.
 * Dependencias: Todos los módulos externos a nuestro proyecto que necesitamos instalar para poder correr el proyecto.
 * Dependencia local: Dependencias que solo viven dentro de nuestro proyecto.
 * Dependencias global: Dependencias que se instalan a nivel computador y pueden ser utilizadas en cualquier proyecto.
 * Version: Cada una de las etapas y cambios que representa nuestro proyecto, pueden ser mayores, menores o parches.
 *
 *  Protocolo HTTP:
 * Hyper Text Transfer Protocol, refiere a un protocolo, el cual es un conjunto de reglas que permite la comunicación entre dos o mas sistemas. Gracias a este protocolo, las computadoras saben comunicarse entre si u permiten comunicarse con servidores para obtención de datos.(Lo podemos ver en todas las paginas que visitamos)
 * Como funciona?
 * Se base en un modelo de petición(request)-respuesta(response). De manera que el cliente tiene que hacer una petición de información, entonces el servidor se encarga de responder con dicha información.
 * 
 * Que tipo de información pedimos?
 * 
 * Al hacer un request, estamos solicitando al servidor ciertos recursos, estos pueden ser:
 * Un dato como un nombre, una fecha, una edad...
 * Información mas compleja como una imagen, un video.
 * Un archivo para descargar.
 * Incluso una pagina web completa.
 * 
 * Maneja multiples peticiones:
 * Cuando programamos nuestro servidor, lo hacemos para escuchar peticiones, la pregunta es: De quien escuchar las peticiones?
 * Bajo su configuración por defecto, un servidor puede escuchar multiples peticiones de multiples clientes al mismo tiempo.
 * 
 * IMPORTANTE!
 * El cliente siempre es quien hace las peticiones (request) y el servidor siempre sera quien hace las respuestas (responses). Cuando hacemos frontend, somos los clientes, y desde el back somos el servidor.
 * 
*/

// Servidor con NodeJS

// const http = require('http')

// const server = http.createServer((request, response) =>{
//     response.end("Mi primer hola mundo desde el Backend!")
// })

// server.listen(8080, ()=>{
//     console.log(`Servidor corriendo en PORT: 8080`)
// })


// Servidor con Express

/**
 * Que es express JS?
 * Express Js es un framework minimalista que permitirá desarrollar servidores mas complejos.
 * Esto nos facilitara:
 * Utilizar diferentes rutas para las peticiones.
 * Mejorar la estructura de nuestro proyecto.
 * Manejar funcionalidades mas complejas y utilización de middlewares(una función,importante, repasar// vamos a tener la (ruta - middlewares - respuesta) es para del circuito de comunicación entre el cliente y el servidor, una de las funciones de los middleware son el acceso, autorización, validación ej: nombre de usuario y password).
 * 
 * ENDPOINT: Es una ruta
 */
const express = require('express')
const app = express()
const PORT = 8080

//ENDPOINT
app.get('/saludo', (req, res) =>{

    res.send("Servidor en express") // también podría obtener este tipo de respuesta res.send("<p style='color:red'>Hola</p>") y estaría generando una etiqueta con estilo

})


app.listen(PORT, ()=>{

    console.log(`Server running on PORT: ${PORT}`)

})
