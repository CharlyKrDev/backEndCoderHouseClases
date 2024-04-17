//Hand ON LAB
/**
 * Como lo hacemos? se crearan dos routers: users y pets.
 * -El router de users debe tener la ruta principal /api/users.
 */

const express = require('express')
const app = express()
const PORT = 8080
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, ()=>{
    console.log(`Conectado al puerto ${PORT}`)
})