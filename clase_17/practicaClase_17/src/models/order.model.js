import mongoose from "mongoose";

const orderCollection = "ordenes"

const orderSchemas = new mongoose.Schema({

    name:String,
    size:{
        type:String,
        enum:["small","medium","large"],
        default:"medium"
    },
    price:Number,
    quantity:Number,
    date:Date
})

const orderModel = mongoose.model(orderCollection, orderSchemas);

export default orderModel