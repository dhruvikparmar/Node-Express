const schema = require("../model/catSchema")
const subCatSchema = require("../model/subCatSchema")
const productSchema = require("../model/productSchema")

module.exports.addProduct = async (req, res) => {
    await subCatSchema.find({}).then((data) => {
        res.render("AddProduct",{ data })
    })
}

module.exports.addPro = async (req, res) => {
    await productSchema.create(req.body).then(() => {
        res.redirect("/productRoutes/addProduct")
    })
}

module.exports.viewProduct = async (req, res) => {
    await productSchema.find({}).populate({
        path:"SubCategoryId",
        populate:{
            path:"categoryId"
        }
    }).then((data) => {
        res.render("viewProduct", { data })
    })
}