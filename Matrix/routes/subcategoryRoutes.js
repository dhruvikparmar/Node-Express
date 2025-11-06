const express = require("express")
const routes = express.Router()
const passport = require("../middleware/localSt")
const ctl = require("../controller/subCategoryCtl")

routes.get("/addSubCategory", passport.checkAuth, ctl.addSubCategory)
routes.post("/addSubCat", passport.checkAuth, ctl.addSubCat)
routes.get("/viewSubCat", passport.checkAuth, ctl.viewSubCat)

module.exports = routes
