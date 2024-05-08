import express from 'express'
import mongoose from 'mongoose'
import useRouter from './routes/users.routes.js';



const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://CharlyKrDev:3a643520*@charlykrdev.ygn6aqg.mongodb.net/testMongooseDB?retryWrites=true&w=majority&appName=CharlyKrDev') //<--- el nombre de la base de datos se carga manual en esta parte, y va antes del  ? ..(.net/?retryWr).
  .then(() => {
    console.log('Conectado a la DB');
  })
  .catch(error => {
    console.error(error, `error`);
  });



app.use('/api/users', useRouter)
app.listen(PORT, console.log(`Server running on port: ${PORT}`));