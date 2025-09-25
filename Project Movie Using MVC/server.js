const express = require("express")
const port = 1000
const path = require("path")

const app = express()

const db = require("./config/db")
const schema = require("./model/firstschema")
const multer = require("./middlewares/multer")

app.set("view engine","ejs")

app.use("/public", express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({ extended: true }))
app.use("/", require("./routes/route"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port " + port);
})