import express from 'express'
import mongoose from 'mongoose'
import useRouter from './routes/users.routes.js';
import  dotenv from 'dotenv';


const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 
dotenv.config()
const mongoServer = process.env.MONGO_URL

mongoose.connect(mongoServer) 
  .then(() => {
    console.log('Conectado a la DB');
  })
  .catch(error => {
    console.error(error, `error`);
  });



app.use('/api/users', useRouter)
app.listen(PORT, console.log(`Server running on port: ${PORT}`));

