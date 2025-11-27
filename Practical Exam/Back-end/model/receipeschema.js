const mongoose = require("mongoose")
const schema = mongoose.Schema({
    "recipename":{
        type:String,
        required:true
    },
    "ingrediants":{
        type:String,
        required:true
    },
    "price":{
        type:Number,
        required:true
    }
})

const receipeschema = mongoose.model("receipe",schema)
module.exports = receipeschema