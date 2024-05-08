import { Router } from "express";
import userModel from "../models/user.model.js";

// Import modelo de usuario <--

const router = Router();

router.get('/', async (req, res)=>{

    try {

        let users = await userModel.find()
        res.send({result: 'success', payload: users})

    } catch (error) {
        console.error(error, `error`)
    }

})

router.post('/', async (req, res)=>{

    let {nombre, apellido, email} = req.body
    if(!nombre || !apellid ||!email){
        res.send({status:'error', error: 'falta parámetros'})
    }
    let result = await userModel.create({nombre, apellido, email})
    res.send({result: 'success', payload: result})

})

router.put('/', (req, res)=>{

    res.send(`put mongoose`)
})
router.delete('/', (req, res)=>{

    res.send(`delete mongoose`)
})
export default router