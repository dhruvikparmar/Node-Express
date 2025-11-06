const express = require("express")
const routes = express.Router()
const ctl = require("../controller/ctl")

const multer = require("../middleware/multer")
const passport = require("../middleware/localSt")

// Login Route

routes.get("/", ctl.Login)
routes.post("/Login", passport.authenticate("local", { failureRedirect: "/" }), ctl.LoginForm)

routes.get("/dashboard", passport.checkAuth, ctl.dashboard)

routes.get("/addAdmin", passport.checkAuth, ctl.Addadmin)

routes.get("/viewAdmin", passport.checkAuth, ctl.first)

routes.get("/Logout", passport.checkAuth, ctl.logout)

routes.get("/changePass", passport.checkAuth, ctl.changePass)

routes.post("/verifyPass", ctl.verifyPass)

routes.post("/forgotPass", ctl.forgotPass)

routes.post("/verifyOtp", ctl.verifyOtp)

// routes.get("/viewAdmin",ctl.Viewadmin)   

routes.post("/addData", multer, ctl.Add)

routes.get("/deleteData", ctl.Delete)

routes.get("/editData", ctl.Edit)

routes.post("/updateData", multer, ctl.Update)

module.exports = routes