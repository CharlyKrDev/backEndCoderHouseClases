import { Router } from "express";
import studentModel from "../models/student.model.js";

export const studentRouter = Router();


studentRouter.get('/api/user', async (req, res) =>{

 try {
    const list = await studentModel.find()

    res.status(200).json(list);

    
 } catch (error) {

    console.error(error, "error")
    
 }

})


studentRouter.get('/api/user/:name', async (req, res) =>{

    let name = req.params.name
    try {
       const student = await studentModel.find({first_name:name})
   
       res.status(200).json(student);
   
       
    } catch (error) {
   
       console.error(error, "error")
       
    }
   
   })

studentRouter.get('/api/user/explain', async (req, res) =>{

    try {
       const list = await studentModel.find().explain("executionStats") //<-- explain es una función nativa de mongoose que explica que paso cuando se busco el documento, tiene varios niveles uno de ellos es el "executionStats", si queremos verlos todos no lo especificamos dentro de explain()
        console.log(list)
       res.status(200).json(list);
   
       
    } catch (error) {
   
       console.error(error, "error")
       
    }
   
   })