import express from "express";
export const registerRouter = express.Router()


const  user = []

registerRouter.get('/register', (req, res)=>{

    res.render("user",{

        style:"style.css",


    })
})




registerRouter.post('/user', (req, res)=>{
    const { userName, userEmail, userPassword } = req.body
    if(userName ==="" || userEmail=== "" || userPassword === ''  ){
       return res.status(404).json({message:`No puede haber campos vacíos`})
    }
    const userRegister = []
    userRegister.push({Usuario:userName, Email: userEmail, Password:userPassword })
    user.push({Usuario:userName, Email: userEmail, Password:userPassword })

    console.log(userRegister)

    res.render("register",{

          


        userRegister,
        

    })

    console.log(user)


})