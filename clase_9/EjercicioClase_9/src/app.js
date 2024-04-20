//Hand ON LAB
/**
 * Como lo hacemos? se crearan dos routers: users y pets.
 * -El router de users debe tener la ruta principal /api/users.
 */

import  express  from 'express';
import petsRouter from './routes/pets.router.js'
import usersRouter from './routes/users.router.js'

const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', petsRouter)
app.use('/', usersRouter)



app.listen(PORT, ()=>{
    console.log(`Conectado al puerto ${PORT}`)
})

