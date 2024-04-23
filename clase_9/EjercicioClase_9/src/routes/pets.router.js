import { Router } from "express";
const petsRouter = Router()
const pets = []

petsRouter.get('/api/pets', (req, res) => {

    res.json(pets)
})

petsRouter.post('/api/pets/', (req, res)=>{

    const { namePet = "", racePet = "" } = req.body
    if(namePet === "" || racePet === "")  return res.status(404).json({error:`No puede haber campos en blanco`})
    pets.push({nombre : namePet, raza:racePet})
    res.status(201).json({pets:pets, message: `Mascota agregada`})

    
})

export default petsRouter