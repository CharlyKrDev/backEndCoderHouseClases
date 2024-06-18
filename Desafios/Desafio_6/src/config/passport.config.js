import passport from "passport";
import GithubStrategy from "passport-github2"
import userService from '../models/user.js'
import dotenv from "dotenv";
import { createHash, isValidPassword } from "../../utils.js";
dotenv.config(); 




const initializePassport = () => {

    //estrategia con tercero
    passport.use('github', new GithubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret:process.env.GITHUB_CLIENT_SECRET,
        callbackURL:"http://localhost:8080/api/sessions/githubcallback"
    }, async(accessToken, refreshToken, profile, done) =>{
        try {
            console.log(profile)
            let user = await userService.findOne({email: profile._json.email})
            if(!user){
                let newUser={
                    first_name:profile._json.name,
                    last_name:"",
                    age:25,
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


