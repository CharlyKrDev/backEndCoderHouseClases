import { Router } from "express"
const usersRouter = Router()
const users = []

usersRouter.get('/api/users', (req, res) =>{

    res.json(users)
})
usersRouter.post('/api/users/', (req, res)=>{
    const {userName = '', userEdad = '', userEmail = '' } = req.body
    if(userName === ""|| userEdad === "" || userEmail === "") return res.status(404).json({error:`No puede haber valores vacíos`})
    users.push({nombre: userName, edad: parseInt(userEdad), email: userEmail, fechaCreacion: new Date().toLocaleString()})
    res.status(201).json({users:users, message: `Usuario agregado`})
})


export default usersRouter