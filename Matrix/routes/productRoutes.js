const express = require("express")
const routes = express.Router()
const passport = require("../middleware/localSt")
const ctl = require("../controller/addProductCtl")

routes.get("/addProduct", passport.checkAuth, ctl.addProduct)
routes.post("/addPro", passport.checkAuth, ctl.addPro)
routes.get("/viewProduct", passport.checkAuth, ctl.viewProduct)

module.exports = routes
