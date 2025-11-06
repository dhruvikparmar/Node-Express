const express = require("express")
const routes = express.Router()
const passport = require("../middleware/localSt")
const ctl = require("../controller/categoryCtl")
const multer = require("../middleware/multer")

routes.get("/addCategory", passport.checkAuth, ctl.addCategory)
routes.post("/addCat", passport.checkAuth, multer, ctl.addcat)
routes.get("/viewCat", passport.checkAuth, ctl.viewCat)

module.exports = routes
