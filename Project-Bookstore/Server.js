const express = require('express')
const port = 1111

const app = express()
const db = require('./Config/Db')
const schema = require('./Models/firstschema')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get("/", async (req, res) => {
    await schema.find().then((data) => {
        console.log(data);
        res.render('index', ({ data }))
    })
})

app.get("/addbook",(req,res)=>{
    res.render('addbook')
})

app.post("/addBook", async (req, res) => {
    await schema.create(req.body).then((data) => {
        res.redirect("/")
    })
})

app.get("/deleteBook", async (req, res) => {
    await schema.findByIdAndDelete(req.query.id).then(() => {
        res.redirect("/")
    })
})

app.get("/editBook", async (req, res) => {
    let singleData = await schema.findById(req.query.id)
    console.log(req.query)
    res.render('edit', { singleData })
})

app.post("/updateBook", async (req, res) => {
    
    await schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect("/");
    })
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`server is running on port ${port}`);
})