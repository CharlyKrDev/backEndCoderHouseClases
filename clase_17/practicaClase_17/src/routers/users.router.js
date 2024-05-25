import { Router } from "express";
import usersModel from "../models/user.model.js";

const usersRouter = Router();

// usersRouter.get("/users",  (req, res) => {
//   try {
//     res.send('Get correcto');
//   } catch (error) {
//     console.error(error, `error`);
//   }
// });

usersRouter.post("/users",  async (req, res) => {

    const { firs_name, last_name, email, gender } = req.body
    try {

        const users = await usersModel.insertMany(req.body)
    
      res.send(users);
    } catch (error) {
      console.error(error, `error`);
    }
  });


  usersRouter.get("/gender", async (req, res) => {
    try {

      const users = await usersModel.paginate({gender:"Female"},{limit:20, page:2})
      res.send(users);
    } catch (error) {
      console.error(error, `error`);
    }
  });

  usersRouter.get('/users',async (req,res)=>{
    let page = parseInt(req.query.page);
    if(!page) page=1;
    //Lean es crucial para mostrar en Handlebars, ya que evita la "hidratación" del documento de mongoose,
    //esto hace que a Handlebars llegue el documento como plain object y no como Document.
    let result = await usersModel.paginate({},{page,limit:5,lean:true})
    result.prevLink = result.hasPrevPage?`http://localhost:8080/users?page=${result.prevPage}`:'';
    result.nextLink = result.hasNextPage?`http://localhost:8080/users?page=${result.nextPage}`:'';
    result.isValid= !(page<=0||page>result.totalPages)
    res.render('students',result)
})

export default usersRouter;
