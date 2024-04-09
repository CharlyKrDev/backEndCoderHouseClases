// Administrador de paquetes - NPM

// console.log()
// class Mil {

//     constructor() {
//         this.acumulados = []
//     }

//     crearNumeros() {

//         for (let i = 0; i < 1000; i++) {

//             const numeros = Math.floor(Math.random() * 20 + 1)

//             this.acumulados.push(numeros);
//             console.log(this.acumulados)
//         }
//     }

// }

// const mil = new Mil();

// mil.crearNumeros()
// console.log(mil.acumulados)

////

let arrayNumbers = []
let arrayObjtNumbers = {}
for (let index = 0; index < 10000; index++) {
    const newNumber = getRandomInt(1, 20)
    arrayNumbers.push(newNumber)
    if (arrayObjtNumbers[newNumber]) {
        arrayObjtNumbers[newNumber] = arrayObjtNumbers[newNumber] + 1
    } else {
        arrayObjtNumbers[newNumber] = 1
    }
}
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
console.log('arrayNumbers:', arrayNumbers);
console.log('arrayObjtNumbers:', arrayObjtNumbers);