const schema = require("../model/catSchema")
const subCatSchema = require("../model/subCatSchema")

module.exports.addSubCategory = async (req, res) => {
    await schema.find({}).then((data) => {
        res.render("AddSubCat", { data })
    })
}

module.exports.addSubCat = async (req, res) => {
    await subCatSchema.create(req.body).then(() => {
        res.redirect("/SubcategoryRoutes/addSubCategory")
    })
}

module.exports.viewSubCat = async (req, res) => {
    await subCatSchema.find().populate("categoryId").then((data) => {
        res.render("viewSubCat", { data })
    })
}