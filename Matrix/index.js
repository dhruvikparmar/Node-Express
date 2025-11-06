const express = require("express")
const port = 1004
const path = require("path")

const app = express()
const route = require("./routes/route")
const db = require("./config/db")
const cookie = require("cookie-parser")
const passport = require("passport")
const session = require("express-session")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookie())

app.use(session({
    name: 'local',
    secret: 'dmp',
    resave: true,//when we route from one page to another page , it will save all changes in session 
    saveUninitialized: false,
    cookie: { maxAge: 5 * 60 * 1000 } //user time-out -- 5 minites , 60 seconds , 1000 miliseconds
}));

app.use(passport.initialize())
app.use(passport.session())
app.use("/", route)
app.use("/cateoryRoutes", require("./routes/cateoryRoutes"))
app.use("/subcategoryRoutes", require("./routes/subcategoryRoutes"))
app.use("/productRoutes", require("./routes/productRoutes"))

// app.use("/addData",route)

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server Strated on port ${port}`);
})
