const express=require("express")
const routes=express.Router()
const ctl=require("../controller/ctl")
const multer=require("../middleware/multer")

// Login Route

routes.get("/", ctl.Login)
routes.post("/Login", ctl.LoginForm)

routes.get("/dashboard",ctl.dashboard)

routes.get("/addAdmin",ctl.Addadmin)

// routes.get("/viewAdmin",ctl.Viewadmin)   

routes.get("/viewAdmin",ctl.first)

routes.post("/addData",multer,ctl.Add)

routes.get("/deleteData",ctl.Delete)

routes.get("/editData",ctl.Edit)

routes.post("/updateData",multer,ctl.Update)

module.exports=routes