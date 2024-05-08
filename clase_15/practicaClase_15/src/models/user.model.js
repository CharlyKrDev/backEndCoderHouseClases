import mongoose from 'mongoose'

// Crear una colección con el nombre

const userCollection = 'Usuarios'

const userSchema = new mongoose.Schema({
    // es un objeto que recibe las propiedades a definir

    nombre:{type: String, required:true, max: 100},//<--- recibe 3 parámetros, el tipo de dato, que es obligatorio o no (true o false) y el max de caracteres
    apellido:{type: String, required:true, max: 100},
    email:{type: String, required:true, max: 50}
})

const userModel = mongoose.model(userCollection, userSchema)

export default userModel