const schema = require("../model/catSchema")

module.exports.addCategory = (req, res) => {
    res.render("AddCat")
}

module.exports.addcat = async (req, res) => {
    req.body.catImage = req.file.path
    await schema.create(req.body).then(() => {
        res.redirect("/cateoryRoutes/addCategory")
    })
}

module.exports.viewCat = async (req,res) =>{
    await schema.find().then((data)=>{
        res.render("viewCat",{data})
    })
}