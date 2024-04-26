import express from "express";
import  {viewsPath, publicPath} from "./utils.js";
import { viewsRouter, hbs } from "./routers/viewsRouter.js";
import { registerRouter } from "./routers/registerRouter.js";




const app = express();
const PORT = 8080;

app.set("views", viewsPath);
app.enable("view cache");
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



  
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use('/', viewsRouter)
app.use('/', registerRouter)



app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});