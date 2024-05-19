import express from 'express'
import mongoose from 'mongoose';
// import studentModel from './models/user.model';
import dotenv from "dotenv";
import { studentRouter } from './routers/student.route.js';

const app = express();
const PORT = 8080;
dotenv.config();
const mongoServer = process.env.MONGO_URL_CLASE_16;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose
  .connect(mongoServer)
  .then(() => {
    console.log("Conectado a la DB");
  })
  .catch((error) => {
    console.error(error, `error`);
  });

app.use('/', studentRouter )




app.listen(PORT, console.log(`Server running on port: PORT`));