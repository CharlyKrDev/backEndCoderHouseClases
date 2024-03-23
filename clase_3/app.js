//Operadores exponenciales, con ES6 se agrega la ** para usar de forma exponencial

const base = 5
const exponente = 2
const resultado = base ** exponente
console.log(resultado)

//método includes, nos indica true o false si hay un elemento dentro de un array

const numeros = [2, 3, 4, 5, 6]
const bebidas = ['cafe', 'mate', 'agua']
console.log(bebidas.includes('agua'))

//Operador Nullish (??) => evalúa si el primer elemento tiene un valor o no, en el caso de que no, brinda el segundo elemento. en el caso del ejemplo, nombre es de valor nulo, por lo cual nombreCompleto devuelve el nombrePorDefecto.

const nombre = null
const nombrePorDefecto = 'CoderHouse'
const nombreCompleto = nombre ?? nombrePorDefecto
console.log(nombreCompleto)

//Object.entries, Object.values, Object.keys

const persona = {
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
const ejemploPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true
            if (exito) {
                resolve('Exito')
            } else {
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

const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

const nuevalista = objetos.reduce((lista, objeto) => {
//uso el reduce para recorrer cada elemento del array y devolver sus objetos
    console.log(Object.keys(objeto))
//ahora que tengo la informacion en objeto, puedo usar el Object.keys para obtener la clave de los objetos y devolverlos como array, y con el forEach recorro esos arrays para poder obtener la clave de forma indivualizada 
    Object.keys(objeto).forEach((producto) => {

        if (!lista.includes(producto))
//con el IF armo la condicion para determinar que si la clave ya esta incluida dentro de la lista que no la vuelva a pushear, y de esta forma genera un nuevo array sin productos repetidos.
            lista.push(producto)

    })
    return lista

}, [])

const ventas = objetos.reduce((venta, objeto) => {
    console.log(objeto) // con el reduce, obtengo los objetos de adentro del array
    const valores = Object.values(objeto) // ahora que tengo los objetos puedo usar Object.value, que funciona solo sobre objetos y obtener 2 array con cada valor, el Object se ejecuta sobre un objeto, pero devuelve un array
    console.log(valores)
    const total = valores.reduce((acum, valor) => acum + valor, 0) // ahora tomo esos array los sumo con un reduce
    console.log(total)
    return venta + total //sumo ambos acumulados

}, 0)