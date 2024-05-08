import express from "express";
import  {viewsPath, publicPath} from "./utils.js";
import { viewsRouter, hbs } from "./routers/viewsRouter.js";
import { registerRouter } from "./routers/registerRouter.js";
import { Server } from "socket.io"; //<--- Nuevo import necesario para usar socket.io



const app = express();
const PORT = 8080;
const httpServer = app.listen(PORT, console.log(`Server running on port: ${PORT}`));
const socketServer = new Server(httpServer) //<--- Necesario para usar socket.io, le pasamos los datos del servidor para generar uno con socket


app.set("views", viewsPath);
app.enable("view cache");
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



  
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use('/', viewsRouter)
app.use('/', registerRouter)


let messagesSaved =[]

socketServer.on("connection", (socket)=>{   //<-- este socket es el que relaciona al js, se puede llamar socket o como yo quiera mientras que se respete el nombre en el js
  // console.log(`New client connected`)
  socket.on('message', (data)=>{ //<--- aca desde la callback socket que esta relacionada al js, podemos recibir información, en este caso data, que recibe lo enviado desde el js bajo el nombre message. "socket.emit('message', "Connection from websocket")"

    console.log(`Mensaje recibido desde el cliente ${data}`)
    messagesSaved.push(data)
    socketServer.emit('message', data)
    console.log(messagesSaved)

  })

})

