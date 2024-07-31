import express from 'express'
import cluster from "cluster";
import { cpus } from 'os';



const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


console.log(cpus().length)






app.listen(PORT, console.log(`Server running on port: PORT`));