import mongoose from 'mongoose'

// Crear una colección con el nombre

const userCollection = 'usuarios'

const userSchema = new mongoose.Schema({ //<-- es la declaración del esquema (es un objeto que definir las propiedades a recibir y el tipo de dato)
    

    nombre:{type: String, required:true, max: 100},//<--- recibe 3 parámetros, 1) Type: el tipo de dato, 2) required: si es obligatorio o no (true o false) y 3) max: el max de caracteres
    apellido:{type: String, required:true, max: 100},
    email:{type: String, required:true, max: 50}
})

const userModel = mongoose.model(userCollection, userSchema)

export default userModel