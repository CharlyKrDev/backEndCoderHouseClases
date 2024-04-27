import express from "express";
import { create } from "express-handlebars";



export const viewsRouter = express.Router()




const userName = [
 
  {
       "nombre":"Jose",
       "apellido":32,
       "email":"jose@hotmail.com",
       "telefono":123456
   },
  {
       "nombre":"Ema",
       "apellido":32,
       "email":"jose@hotmail.com",
       "telefono":123456
   },
   {
       "nombre":"Maria",
       "apellido":32,
       "email":"jose@hotmail.com",
       "telefono":123456
   },
   {
      "nombre":"Roberto",
      "apellido":32,
      "email":"jose@hotmail.com",
      "telefono":123456
  },
  {
      "nombre":"lucia",
      "apellido":32,
      "email":"jose@hotmail.com",
      "telefono":123456
  }
];

const numRandom = Math.floor(Math.random() * userName.length);
const user = userName[numRandom];
const userPicked =[user] //<--- importante entender que necesito trabajar sobre un array de objetos, por eso en getUserP... uso el modulo Object, pq de esa forma formo un array con las keys que luego puedo mapear y asignar esa key a un valor: array.key para que de devuelve el valor que le corresponde a cada key. en userPicked force la conversion de un objeto a un array de objetos para poder pasar el parámetro de una forma mas sencilla al render de about.
export const hbs = create({
  
  helpers: {
      foo() {
          

          return `Bienvenido ${user.nombre}`

      },
      getUserProperties() {
          
          return Object.keys(user).map(key => ({ key, value: user[key] }));
      }
  }
});
const food =[
  
  {name:'Hamburguesa', "price":100},
  {name:'Banana', "price":20},
  {name:'Soda', "price":40},
  {name:'Ensalada', "price":120},
  {name:'Pizza', "price":150},

]


viewsRouter.get("/about", (req, res) => {

  const testUser ={
      name: "Hilda",
      lastName:"Martinez",
      role:"admin"
    }

res.render("about",{
  style:'style.css',
  user:testUser,
  isAdmin:testUser.role==='admin', //<-- isAdmin se va a usar el handlebars en el if como una condición booleana y solo aplica a lo que esta dentro de la condición {{#if condición}}contenido cuando se cumple la condición{{else}}contenido cuando la condición no se cumple{{/if}}, en el caso de about solo aplicaría a food pq es lo que esta dentro de if.
  food,
  userPicked,
})


})




viewsRouter.get("/", (req, res) => {
res.render("home", {
  showTitle: true,
  style:'style.css'

  // Override `foo` helper only for this rendering.
});
});