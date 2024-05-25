import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import dotenv from "dotenv";
import { orderRouter } from './routers/order.router.js';
import usersRouter from './routers/users.router.js';

const app = express();
const PORT = 8080;
dotenv.config();
const mongoServer = process.env.MONGO_URL_CLASE_17;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars');

mongoose
  .connect(mongoServer)
  .then(() => {
    console.log("Conectado a la DB");
  })
  .catch((error) => {
    console.error(error, `error`);
  });

app.use('/', orderRouter )
app.use('/', usersRouter )







app.listen(PORT, console.log(`Server running on port: PORT`));