const schema = require("../model/firstschema")
const fs = require("fs")


module.exports.Firstpage = async (req, res) => {
    await schema.find().then((data) => {
        res.render("index", { data })
    })
}

module.exports.AddButton = (req,res) => {
    res.render("addMovie")
}

module.exports.AddMovie = async(req,res)=>{
    await schema.find().then((data) => {
        console.log(data);
        res.render("addMovie", { data })
    })
}

module.exports.AddData = async (req, res) => {
    req.body.image = req.file.path
    await schema.create(req.body).then(() => {
        res.redirect("/")
    })
}

module.exports.DeleteData = async (req, res) => {
    let singleData = await schema.findById(req.query.id)
    console.log(singleData);
    fs.unlinkSync(singleData.image)
    await schema.findByIdAndDelete(req.query.id).then(() => {
        res.redirect("/")
    })
}

module.exports.EditData = async (req, res) => {
    let singleData = await schema.findById(req.query.id)
    res.render("edit", { singleData })
}

module.exports.UpdateData = async(req,res)=>{
    let singleData = await schema.findById(req.body.id)
    let img = ""
    req.file ? img = req.file.path : img = singleData.image
    req.file && fs.unlinkSync(singleData.image)
    req.body.image = img
    await schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect("/")
    })
}
