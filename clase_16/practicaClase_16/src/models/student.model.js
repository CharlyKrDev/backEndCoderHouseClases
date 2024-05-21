import mongoose from "mongoose";
import coursesModel from "./courses.model.js";
const studentCollection = "estudiantes"


const studentSchema = new mongoose.Schema({

    first_name: String,
    last_name: String,
    email:String,
    gender:String,
    group:String,
    courses:{
        type: [{
            course:{

                type:mongoose.Schema.Types.ObjectId,
                ref:"courses"
            
            }
        }],
        default:[]
    }
})

const studentModel = mongoose.model(studentCollection, studentSchema)

export default studentModel

