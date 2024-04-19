const express = require('express')
const app = express()
const PORT = 8080
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Endpoints

app.get('/', (req, res)=>{

    res.json({
        
    })
})







app.listen(PORT, (req, res)=>{

   console.log(`Server running on port: ${PORT}`)
})