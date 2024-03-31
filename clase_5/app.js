//Json y File system (fs)
const fs = require(`fs`).promises // se usa con los callbacks, promesas
// const fs = require(`fs`) //se usa con funciones sincronas, o sea con los ...Sync


/**
 * readFileSync = lectura de un archivo en forma sincrónica
 * writeFileSync = Escritura de un archivo de forma sincrónica
 * appendFileSync = Actualizar un archivo de forma sincrónica
 * unlinkFileSync = Borrar un archivo de forma sincrónica
 * mkdirSync = Creación de un directorio
 * rmdirSync = Elimina de un directorio
 * existsSync == Sirve para verificar si un elemento existe
 * 
 */
//Crear
// const data = `Contenido para escribir en el archivo`
// try{ 
//     fs.writeFileSync('MiArchivo.txt', data)// recibe 2 argumentos, 1ero el nombre del archivo y 2do la información, el origen.
//     console.log(`Archivo creado correctamente`)

// } catch(error){
//     console.error('Error al escribir el archivo', error)

// }
// con el código de arriba cree el archivo que figura dentro de backEnd el (MiArchivo.txt)

//Leer archivo

// try{
//     const data = fs.readFileSync('MiArchivo.txt', 'utf8') // se pasan dos parametros el archivo en si, y la version utf8
//     console.log('Contenido a mostrar:', data); // aca se llama a la variable que lee el archivo para que se muestre en la consola.

// }catch(error){
//     console.error(`error al leer el archivo`, error)
// }

// Append para modificar un archivo ya existente

// const masData = 'Datos adicionales para agregar al texto del archivo'
// try{

//     fs.appendFileSync('MiArchivo.txt', masData)

//     console.log('Contenido para actualizar:');


// }catch(error){
//     console.error(`error`, error)
// }

// * unlinkFileSync = Borrar un archivo de forma sincrónica

// try{
//     fs.unlinkSync('MiArchivo.txt') // con esto eliminamos el archivo que habíamos creado previamente
//     console.log('Borrado correctamente');
// }catch(error){
//     console.error('error', error)
// }

// * mkdirSync = Creación de un directorio

// try{
//     fs.mkdirSync('MiCarpeta') // crear una carpeta
//     console.log(`Directorio creado de forma correcta`);

// }catch(error){
//     console.error(`error`, error)
// }

// * rmdirSync = Borra un directorio de un directorio

// try{
//     fs.rmdirSync('MiCarpeta') // borra la carpeta
//     console.log(`Directorio eliminado de forma correcta`);

// }catch(error){
//     console.error(`error`, error)
// }

//FS Con callbacks son los mismos, pero sin el ...Sync
//IMPLEMENTACIÓN CON PROMESAS Y FUNCIONES ASÍNCRONAS


async function readFile(){
    try{
        const data = await fs.readFile('archivo.txt','utf8')
            console.log(`Contenido del archivo: `, data);


    }catch(error){
        console.error(`Error no se pudo leer el archivo`, error)
    }
}



const writeFile = async () =>{
    const data = 'Contenido del archivo es (writeFile)'
    try{

        await fs.writeFile('archivo.txt', data)
        console.log(`Archivo creado correctamente`);


    }catch(error){
        
        console.error('Error al escribir el archivo', error)
    }

}



const appendFile = async ()=>{
    const dataAdicional = `Datos adicionales para mi archivo`
    try{
        await fs.appendFile('archivo.txt', dataAdicional)
        console.log(`Archivo actualizado`);
    }catch(error){
    
        console.error(`Error al querer escribir información adicional`)
    }}
    

// si llamo a cada funcion de manera directa, se ejecutan todas a la vez (por decirlo de una manera) lo que hace que el read no lo lea segun se ejecuta
// es por eso que para poder tener un estado parcial del archivo hay que generar una funcion  asyn con los llamados en await
const llamadosEnOrden = async ()=>{

    await writeFile() // crear el archivo con contenido

    await readFile() // lee el archivo y el contenido
    await appendFile() //modifica el contenido
    
    await readFile()


}

llamadosEnOrden()