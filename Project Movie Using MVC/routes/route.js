const express = require("express")
const route = express.Router()
const control = require("../controller/control")
const multer = require("../middlewares/multer")

route.get("/", control.Firstpage)
route.post("/addData",multer, control.AddData)
route.get("/addMovie-button", control.AddButton)
route.post("/addMovie", control.AddMovie)
route.get("/DeleteData", control.DeleteData)
route.get("/EditData", control.EditData)
route.post("/UpdateData", control.EditData)

module.exports = route
