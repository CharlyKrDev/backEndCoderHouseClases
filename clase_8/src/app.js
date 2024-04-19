const express = require('express')
const app = express()
const PORT = 8080
app.use(express.urlencoded({extended:true}));
app.use(express.json())

let tasks =[
    {id: 1, title:"Tarea 1"},
    {id: 2, title:"Tarea 2"},
    {id: 3, title:"Tarea 3"},



]

//Endpoint 

app.get('/tasks', (req, res) =>{
    res.json(tasks)
})

app.get('/tasks/:id', (req, res)=>{
    const taskId = parseInt(req.params.id)
    const task = tasks.find((task) => task.id === taskId)
    if(!task) return res.status(404).json(`El id: ${taskId} no es valido`)
    res.json(task)

})

app.post('/tasks',(req, res) =>{
    const { title } = req.body  // se utiliza con post y put, ya que necesito enviar información
    console.log(title)
    const getId = tasks.length > 0 ? tasks[tasks.length -1].id : 0
    const newId = getId + 1
    const newTask = {id: newId , title:title}
    tasks.push(newTask) 
    res.status(201).json(newTask)
} )


app.put('/tasks/:id', (req, res)=>{
    const taskId = parseInt(req.params.id)
    const task = tasks.find((task)=> task.id === taskId)
    if(!task) return res.status(404).json(`El id: ${taskId} no es valido`)
    const {title=task.title} = req.body
    task.title = title
    res.json(task)

})

app.delete('/tasks/:id', (req, res)=>{
    const taskId = parseInt(req.params.id)
    const initialLength = tasks.length;

    tasks = tasks.filter(task => task.id !== taskId) // otra forma seria con findIndex y splice
    // const taskFind = tasks.findIndex((task) => task.id === taskId)
    // taskFind !== -1 ? tasks.splice(taskFind, 1) : console.log(`Error`)
    if (tasks.length === initialLength) {
        res.status(404).json({ error: 'No se encontró ninguna tarea con el ID proporcionado' });
    } else {
        res.json({ message: 'Tarea eliminada correctamente' });
    }

})





app.listen(PORT, (()=>{
    
    console.log(`Connection ready to port: ${PORT}`)

}))