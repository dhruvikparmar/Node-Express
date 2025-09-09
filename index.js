const { render } = require("ejs")
const express = require("express")
const port = 1009

const app = express()

let students = [
    { "id": 1, "name": "rahul", "age": 23 },
    { "id": 2, "name": "harsh", "age": 21 },
    { "id": 3, "name": "sahil", "age": 22 }
]

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index", { students })
})

app.post("/addData", (req, res) => {
    // console.log(req.body);
    req.body.id = students.length+1;
    students.push(req.body)
    res.redirect("/");
})

app.get("/deleteData/:id",(req,res)=>{
    let newdata = students.filter((item)=>item.id != req.params.id)
    students = newdata
    res.redirect("/") 
    // console.log(req.params.id)
})


app.get("/editData",(req,res)=>{
    let singleData = students.find((item)=>item.id == req.query.id)
    res.render("edit",{singleData});
    // console.log(req.query)
})

app.post("/updateData",(req,res)=>{
    let singleData = students.find((item)=>item.id == req.body.id)
    singleData.name = req.body.name
    singleData.age = req.body.age
    res.redirect("/")
    // res.render("edit",{singleData});

})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server starte on port " + port);
})