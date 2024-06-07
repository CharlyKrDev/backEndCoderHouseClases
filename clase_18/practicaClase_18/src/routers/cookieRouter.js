
import { Router } from "express";


export const cookiesRouter = Router();




cookiesRouter.get("/setCookie", (req, res)=>{

    res.cookie("CoderCookie", "Cookie con información", {maxAge: 100000}).send("cookie")
})
cookiesRouter.get("/setCookie2", (req, res)=>{

    res.cookie("CoderCookie2", "Cookie con información", {maxAge: 10000}).send("cookie")
})

cookiesRouter.get("/getCookie", (req, res)=>{

    res.send(req.cookies)
})

cookiesRouter.get("/deleteCookie", (req, res)=>{

    res.clearCookie("CoderCookie").send("Cookie eliminada")
})



export default cookiesRouter   
