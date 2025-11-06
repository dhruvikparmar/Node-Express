// const { Schema } = require("mongoose")
const schema = require("../model/firstSchema")
const fs = require("fs")    
const mailer = require("../middleware/mailer")
const passport = require("passport")


//Add Users 
module.exports.dashboard = async (req, res) => {
    res.render("Dashboard")
    // if (req.cookies.admin) {
    // }
    // else {
    // res.redirect("/")
    // }
}
module.exports.Addadmin = async (req, res) => {
    res.render("AddAdmin")
}
module.exports.Viewadmin = async (req, res) => {
    res.render("viewAdmin")
}
module.exports.Add = async (req, res) => {
    req.body.image = req.file.path
    await schema.create(req.body).then(() => {
        res.redirect("/addAdmin")
    })
}
module.exports.first = async (req, res) => {
    await schema.find().then((data) => {
        res.render("viewAdmin", { data })
    })
}

module.exports.Delete = async (req, res) => {
    let singleData = await schema.findById(req.query.id)
    fs.unlinkSync(singleData.image)
    await schema.findByIdAndDelete(req.query.id).then(() => {
        res.redirect("/viewAdmin")
    })
}

module.exports.Edit = async (req, res) => {
    let singleData = await schema.findById(req.query.id)
    // console.log(singleData);
    res.render("Edit", { singleData })
}

module.exports.Update = async (req, res) => {
    let singleData = await schema.findById(req.body.id)
    let img = ""

    req.file ? img = req.file.path : img = singleData.image

    req.file && fs.unlinkSync(singleData.image)

    req.body.image = img

    await schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect("/viewAdmin")
    })
}


// Authentications
module.exports.Login = async (req, res) => {
    res.render("Login")
}

module.exports.logout = async (req, res) => {
    req.session.destroy();
    res.redirect("/")
}

module.exports.LoginForm = async (req, res) => {
    res.redirect("/dashboard")
    // let admin = await schema.findOne({email : req.body.email})

    // if(admin)
    // {
    //     if(admin.password == req.body.password)
    //     {
    
    //         res.cookie("admin", admin)
    //         res.redirect("/dashboard")
    //     }
    //     else {
    //         res.redirect("/")
    //     }
    // }else {
    //     res.redirect("/")
    // }
}

module.exports.changePass = (req, res) => {
    res.render("ChangePass")
}

module.exports.verifyPass = async (req, res) => {
    let admin = req.user
    if (admin.password == req.body.oldPass) {
        if (req.body.newPass == req.body.confirmPass) {
            await schema.findByIdAndUpdate(admin.id, { password: req.body.newPass }).then(() => {
                res.redirect("/logout")
            })
        }
        else {
            res.redirect("/ChangePass")
        }
    }
    else {
        res.redirect("/logout")
    }
}

module.exports.forgotPass = async (req, res) => {
    console.log(req.body);

    let admin = await schema.findOne({ email: req.body.email })
    if (admin) {
        let otp = Math.floor(Math.random() * 1000 + 7000);
        mailer.sendOTP(req.body.email, otp)
        req.session.otp = otp
        req.session.adminID = admin.id
        res.render("verifyOtp")
    }
    else {
        res.redirect("/")
    }
}

module.exports.verifyOtp = async (req, res) => {
    let adminID = req.session.adminID
    let otp = req.session.otp
    if (otp == req.body.otp) {
        if (req.body.newPass == req.body.confirmPass) {
            await schema.findByIdAndUpdate(adminID, { password: req.body.newPass }).then(() => {
                console.log("password updated")
                res.redirect("/")
            })
        }
        else {
            res.redirect("/")
        }
    }
    else {
        res.redirect("/")
    }
}