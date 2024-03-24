// Calculadora positiva con promesas
//Definir funciones suma, resta, multiplicacion y division
// Debe devolver una promesa que se resuelva siempre que se cumplan las condiciones.

const suma = (a, b) => {

    return new Promise((resolve, reject) => {

        if (a === 0 || b === 0) {
            reject(`Operación invalida`)
        } else if (a + b < 0) {
            reject(`La calculadora solo puede devolver valores positivos`)
        } else {
            resolve(a + b)
        }

    })

}

const resta = (a, b) => {

    return new Promise((resolve, reject) => {

        (a === 0 || b === 0 || a - b < 0) ? reject(`Operación inválida: La calculadora solo puede devolver valores positivos`) : resolve(a - b);

        // es lo mismo que arriba, pero en version ternaria


    })

}

const multiplicacion = (a, b) => {
    return new Promise((resolve, reject) => {
        (a === 0 || b === 0 || a * b < 0) ? reject(`Operación inválida: La calculadora solo puede devolver valores positivos`) : resolve(a * b);
    })
}

const division = ((a, b) => {
    return new Promise((resolve, reject) => {
        (b === 0) ? reject(`Operación inválida: No se puede dividir por cero`) : resolve(a / b)
    })
})

const calculos = async () => {
    try {

        const resultadoSuma = await suma(5, 7)
        console.log(`Resultado suma: ${resultadoSuma}`);
        const resultadoResta = await resta(9, 7)
        console.log(`Resultado resta: ${resultadoResta}`);
        const resultadoMultiplicacion = await multiplicacion(5, 7)
        console.log(`Resultado multiplicacion: ${resultadoMultiplicacion}`);
        const resultadDivision = await division(5, 7)
        console.log(`Resultado division: ${resultadDivision}`);

    } catch (error) {

        console.error('Error', error)
    }
}

calculos()


// con la siguiente sintaxis lo que logro por medio de un switch es generar la posibilidad de usar cada funcion segun mi necesidad al indicar cual es la operacion que quiero realizar
const calculos2 = async (operacion, a, b) => {
    try {
        let resultado;

        switch (operacion) {
            case 'suma':
                resultado = await suma(a, b);
                console.log(`Resultado suma: ${resultado}`);
                break;
            case 'resta':
                resultado = await resta(a, b);
                console.log(`Resultado resta: ${resultado}`);
                break;
            case 'multiplicacion':
                resultado = await multiplicacion(a, b);
                console.log(`Resultado multiplicacion: ${resultado}`);
                break;
            case 'division':
                resultado = await division(a, b);
                console.log(`Resultado division: ${resultado}`);
                break;

            default:
                console.error('Operación no válida');
        }
    } catch (error) {
        console.error('Error', error);
    }
}

calculos2('suma', 2, 3);
calculos2('resta', 5, 2);
calculos2('multiplicacion', 4, 6); 
calculos2('division', 2, 0); 