import express from 'express'
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.get("/setCookie", (req, res)=>{

    res.cookie("CoderCookie", "Cookie con información", {maxAge: 100000}).send("cookie")
})
app.get("/setCookie2", (req, res)=>{

    res.cookie("CoderCookie2", "Cookie con información", {maxAge: 10000}).send("cookie")
})

app.get("/getCookie", (req, res)=>{

    res.send(req.cookies)
})

app.get("/deleteCookie", (req, res)=>{

    res.clearCookie("CoderCookie").send("Cookie eliminada")
})



app.listen(PORT, console.log(`Server running on port: ${PORT}`));