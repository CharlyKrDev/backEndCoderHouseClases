/** Clase 4 - Programación sincrónica y asincronía
 * Funciones en JS
 * Callbacks
 * Promesas
 * Sincronismo vs Asincronismo 
 */

//Funcion simple

const saludar = () =>{

    console.log(`Funcion simple`)
}

saludar()

//Simple con parametros
const sumar = (a,b) =>{

    console.log(a+b)
}
sumar(1,3)

//Funciones con una sola expresion

const duplicar = (num) => console.log(num * 2);

duplicar(4)
// Arrow function en un array de objetos

const usuarios = [
    {nombre: `Alumno a`, edad:30},
    {nombre: `Alumno b`, edad:38},
    {nombre: `Alumno c`, edad:20},
]

const nombres = usuarios.map((usuario)=> usuario.nombre)
console.log(nombres)

//Arrow function como método de un objeto
const persona ={
    nombre:`Franco`,
    edad:25,
    saludar: function () {console.log(`Hola, soy ${this.nombre}`)}
}

persona.saludar()

//Function tradicional
function obtenerDatosUsuario(id, callback){

    setTimeout(()=>{

        const usuario = {
            id: id,
            nombre: `Coder`,
            email: `coder@gmail.com`
        }
        callback(usuario)

    }, 5000)

}
function mostrarDatosDeUsuario(usuario){
    console.log(`nombre: ${usuario.nombre}, Email:${usuario.email}, el id es:${usuario.id}`)
}
obtenerDatosUsuario(123, mostrarDatosDeUsuario)

//Promise

const promesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{

        const exito = true
        if(exito){
            resolve(`Tarea ejecutada con éxito`)
        } else {
            reject(`Ocurrió un error`)
        }

    }, 2000)
})

promesa.then((mensaje)=>{
    console.log(`Exito`, mensaje)
}).catch((error)=>{console.log(`Error`, error);})

