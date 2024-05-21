import { Router } from "express";
import studentModel from "../models/student.model.js";

const studentRouter = Router();


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

   studentRouter.post('/api/student', async (req, res) =>{

    const { first_name,last_name,email,gender, group} = req.body

    try {
        const newStudent = await studentModel.create(req.body)
   
       res.status(200).json(newStudent);
   
       
    } catch (error) {
   
       console.error(error, "error")
       
    }
   
   })


   studentRouter.get('/api/student/:id', async (req, res)=>{
      const studentId = req.params.id 
      try {
         const student = await studentModel.findOne({_id:studentId})
         console.log(student.courses)
         res.status(200).send(student)
      } catch (error) {
         console.error(error, "error")

      }

   })


      studentRouter.put('/api/student/:id', async (req, res)=>{
         const studentId = req.params.id 
         const {courseId} = req.body
         try {
            const student = await studentModel.findOne({_id:studentId})
            student.courses.push({course: courseId})
            await student.save() //<--- puedo pushear y luego usar el método save() sobre el objeto, o puedo  --> usar await studentModel.updateOne({_id:studentId}, student) que busca actualizar el objeto, es básicamente lo mismo. La diferencia es que save() guarda todos los cambios que se hayan realizado sobre el objeto, mientras que updateOne() solo el parámetro que le pasemos.
            
            res.status(200).send(student)
         } catch (error) {
            console.error(error, "error")
   
         }
   
      })

      

      
   export default studentRouter