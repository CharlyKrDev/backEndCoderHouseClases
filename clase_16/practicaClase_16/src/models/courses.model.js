import mongoose from "mongoose";

const coursesCollection = "curso"


const coursesSchema = new mongoose.Schema({

    title: String,
    description: String,
    difficulty:String,
    topics:String,
    professor:String,
    students:[]
})

const coursesModel = mongoose.model(coursesCollection, coursesSchema)

export default coursesModel

