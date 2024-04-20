import { Router } from "express";
const petsRouter = Router()
const pets = []

petsRouter.get('/api/pets', (req, res) => {

    res.json(pets)
})

petsRouter.post('/api/pets/', (req, res)=>{

    const { nombre = "", raza = "" } = req.body
    if(nombre === "" || raza === "")  return res.status(404).json({error:`No puede haber campos en blanco`})
    pets.push({nombre : nombre, raza:raza})
    res.status(201).json({pets:pets, message: `Mascota agregada`})

    
})

export default petsRouter