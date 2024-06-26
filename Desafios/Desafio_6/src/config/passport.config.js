import passport from "passport";
import GithubStrategy from "passport-github2"
import userService from '../models/user.js'
import local from 'passport-local'
import dotenv from "dotenv";
import { createHash, isValidPassword } from "../../utils.js";
dotenv.config(); 

const LocalStrategy = local.Strategy


const initializePassport = () => {

    //estrategia Local
    passport.use('register', new LocalStrategy(
        { passReqToCallback: true, usernameField: 'email' }, async (req, username, password, done) => {
            const { first_name, last_name, email, age } = req.body
            try {
                let user = await userService.findOne({ email: username })
                if (user) {
                    console.log("El usuario ya existe")
                    return done(null, false)
                }
                const newUser = {
                    first_name,
                    last_name,
                    email,
                    age,
                    password: createHash(password)
                }
                let result = await userService.create(newUser)
                return done(null, result)
            } catch (error) {
                return done("Error al obtener el usuario" + error)
            }
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        let user = await userService.findById(id)
        done(null, user)
    })


    passport.use('login', new LocalStrategy({ usernameField: 'email' }, async (username, password, done) => {
        try {
            const user = await userService.findOne({ email: username })
            if (!user) {
                console.log("El usuario no existe")
                return done(null, user)
            }
            if (!isValidPassword(user, password)) return done(null, false)
            return done(null, user)
        } catch (error) {
            return done(error)
        }
    }))



    //estrategia con tercero
    passport.use('github', new GithubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret:process.env.GITHUB_CLIENT_SECRET,
        callbackURL:"http://localhost:8080/api/sessions/githubcallback"
    }, async(accessToken, refreshToken, profile, done) =>{
        try {
            let user = await userService.findOne({email: profile._json.email})
            if(!user){
                let newUser={
                    first_name:profile._json.name,
                    last_name:"",
                    age:28,
                    email: profile._json.email,
                    password:""
                }
                let result = await userService.create(newUser)
                done(null, result)
            }
            else{
                done(null, user)
            }
        } catch (error) {

            done(error)
            
        }
    }
))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        let user = await userService.findById(id)
        done(null, user)
    })




}


export default initializePassport

