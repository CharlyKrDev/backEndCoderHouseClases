import mongoose from "mongoose";

const coursesCollection = "cursos"


const coursesSchema = new mongoose.Schema({

    title: String,
    description: String,
    difficulty:String,
    topics:{
        type:Array,
        default:[]
    },
    professor:String,
    students:{
        type:Array,
        default:[]
    }
})

const coursesModel = mongoose.model(coursesCollection, coursesSchema)

export default coursesModel

