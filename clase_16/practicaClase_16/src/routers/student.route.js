import { Router } from "express";
import studentModel from "../models/student.model.js";
import coursesModel from "../models/courses.model.js";

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


   studentRouter.get('/api/student/:id', async (req, res)=>{ //<-- el middleware 'pre' se utiliza para reemplazar el código comentado(1) y hacerlo mas simple con el código de arriba(2), pero es importante respetar el find en vez de findOne.
      const studentId = req.params.id 
      try {
         const student = await studentModel.findOne({_id:studentId})

         const studentPopulate = await studentModel.find({_id:studentId})//<-(2)
         //(1) -> const studentPopulate = await studentModel.findOne({_id:studentId}).populate("courses.course") //<-- Con esta linea de código traigo la relación entre schemas, en este caso studentModel y courseModel
         console.log(JSON.stringify(studentPopulate, null, '\t'))
         res.status(200).send(student)
      } catch (error) {
         console.error(error, "error")

      }

   })


   studentRouter.put('/api/student/:id', async (req, res) => {
      const studentId = req.params.id;
      const { courseId } = req.body;
    
      try {
        const studentFind = await studentModel.findOne({ _id: studentId });
        if (!studentFind) {
          return res.status(404).send({ message: 'Estudiante no encontrado' });
        }
    
        const courseFind = await coursesModel.findOne({ _id: courseId });
        if (!courseFind) {
          return res.status(404).send({ message: 'Curso no encontrado' });
        }
    
        const checkStudent = courseFind.students.find(student => student.toString() === studentId.toString());
        if (checkStudent) {
          return res.status(400).send({ message: 'El alumno ya está inscrito en el curso' });
        }
    
        studentFind.courses.push(courseId);
        await studentFind.save();//<--- luego de pushear puedo usar el método save() sobre el objeto, o puedo  --> usar await studentModel.updateOne({_id:studentId}, student) que busca actualizar el objeto, es básicamente lo mismo. La diferencia es que save() guarda todos los cambios que se hayan realizado sobre el objeto, mientras que updateOne() solo el parámetro que le pasemos.
    
        courseFind.students.push(studentId);
        await courseFind.save();
    
        res.status(200).send({ message: 'Estudiante añadido al curso correctamente' });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: 'Error interno del servidor' });
      }
    });
      

      
   export default studentRouter   
   

    
