import express from 'express'
import cookieParser from 'cookie-parser';
import cookiesRouter from './src/routers/cookieRouter.js';

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())



app.use("/", cookiesRouter)





app.listen(PORT, console.log(`Server running on port: ${PORT}`));