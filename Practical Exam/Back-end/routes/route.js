const express = require("express")
const route = express.Router()
const ctl = require("../controller/ctl")
const auth = require("../middlewares/auth")

route.post("/registerAdmin",ctl.registerAdmin)
route.post("/loginAdmin",ctl.loginAdmin)
route.get("/viewAdmin",auth.checkauth,ctl.viewAdmin)

route.post("/addRecipe",ctl.addRecipe)
route.get("/viewRecipe",auth.checkauthRecipe,ctl.viewRecipe)

module.exports = route