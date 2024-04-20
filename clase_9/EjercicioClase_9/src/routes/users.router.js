import { Router } from "express"
const usersRouter = Router()
const users = []

usersRouter.get('/api/users', (req, res) =>{

    res.json(users)
})
usersRouter.post('/api/users/', (req, res)=>{
    const {userName = '', userEdad = '', userMail = '' } = req.body
    if(userName === ""|| userEdad === "" || userMail === "") return res.status(404).json({error:`No puede haber valores vacíos`})
    users.push({nombre: userName, edad: userEdad, email: userMail})
    res.status(201).json({users:users, message: `Usuario agregado`})
})


export default usersRouter