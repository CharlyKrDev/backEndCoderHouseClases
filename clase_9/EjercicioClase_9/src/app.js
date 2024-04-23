//Hand ON LAB
/**
 * Como lo hacemos? se crearan dos routers: users y pets.
 * -El router de users debe tener la ruta principal /api/users.
 */

import  express  from 'express';
import petsRouter from './routes/pets.router.js'
import usersRouter from './routes/users.router.js'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 8080

app.use(express.static(join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', petsRouter)
app.use('/', usersRouter)
app.get('/', (req, res) =>{
    res.sendFile(join(__dirname,'../public','index.html'))
})



app.listen(PORT, ()=>{
    console.log(`Conectado al puerto ${PORT}`)
})

