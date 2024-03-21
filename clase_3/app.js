//Operadores exponenciales, con ES6 se agrega la ** para usar de forma exponencial

const base  = 5
const exponente = 2
const resultado = base ** exponente
console.log(resultado)

//método includes, nos indica true o false si hay un elemento dentro de un array

const numeros =[2, 3, 4, 5, 6]
const bebidas = ['cafe', 'mate', 'agua']
console.log(bebidas.includes('agua'))

//Operador Nullish (??) => evalúa si el primer elemento tiene un valor o no, en el caso de que no, brinda el segundo elemento. en el caso del ejemplo, nombre es de valor nulo, por lo cual nombreCompleto devuelve el nombrePorDefecto.

const nombre = null
const nombrePorDefecto = 'CoderHouse'
const nombreCompleto = nombre  ?? nombrePorDefecto
console.log(nombreCompleto)

//Object.entries, Object.values, Object.keys

const persona ={
    nombre: 'Coder',
    edad: 30,
    ciudad: 'Cordoba'
}

const entradas = Object.entries(persona)
const valores = Object.values(persona)
const claves = Object.keys(persona)


console.log(entradas)
console.log(valores)
console.log(claves)

// Finally VER LA CLASE
const ejemploPromesa = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const exito = true
            if(exito){
                resolve('Exito')
            }else{
                reject('Error')
            }

        }, 5000)
    })

}

ejemploPromesa()

// Spread Operator, realiza una copia de todo o lo que necesitemos, ya sea array u objetos, y a su vez se puede ampliar o reducir

const numeros2 = [1, 2, 3, 4]
const nuevoNumeros = [...numeros2, 5, 6]

console.log(nuevoNumeros)
// Ejercicio

const objetos =  [
    {
    manzanas:3,
    peras:2,
    carne:1,
    jugos:5,
    dulces:2
    },
    {
    manzanas:1,
    sandias:1,
    huevos:6,
    jugos:1,
    panes:4
    }
]

const tiposDeProductos = objetos.reduce((lista, objeto)=>{
    Object.keys(objeto).forEach(producto =>{ // tambien se puede usar .map en vez de forEach, pero no seria recomendable pq map crearia un nuevo array el cual no estaria siendo usado.
        if(!lista.includes(producto)){
            lista.push(producto)

        }
    })
    return lista

},[])
console.log(tiposDeProductos)

const totalProductosVendidos = objetos.reduce((total, objeto) =>{
    const cantidades = Object.values(objeto)
    const suma = cantidades.reduce((a, b) => a + b, 0)
    return total + suma
}, 0)

console.log(totalProductosVendidos)