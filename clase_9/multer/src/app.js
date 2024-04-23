import express from 'express'
import multer from 'multer'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';



const app = express()
const PORT = 8080
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const date = new Date().toLocaleString('es-IT', { hour12: false }).replace(/[/:,]/g, '-').split(" ").join("")

app.use(express.static(join(__dirname, '../public/')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "../public/upload")
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname + "-" + date) // originalname = a que conserva el nombre original

    }
})

const upload = multer({storage})
app.post("/upload", upload.single('archivo'), (req, res) =>{
    res.json({message: "Archivo subido correctamente!"})
})



app.listen(PORT, ()=>{
    console.log(`Server running in port: ${PORT}`)
})

