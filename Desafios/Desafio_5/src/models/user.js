import mongoose from "mongoose";

const userCollection = "Users";

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: { type: String, unique: true },
    age: Number,
    rol:{
        type:String,
        default:'user'
    },
    password: String,
});

const firstCollection = mongoose.model(userCollection, userSchema);

export default firstCollection

