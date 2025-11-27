const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Practicle-Exam")

const db=mongoose.connection

db.once('open',(err)=>{
    err ? console.log(err) : console.log("Database is connected successfully")
})

module.exports = db