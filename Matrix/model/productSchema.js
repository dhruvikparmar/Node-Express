const mongoose = require("mongoose")
const schema = mongoose.Schema({
    "productName": {
        type: String,
        required: true
    },
    "SubCategoryId": {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Subcategory",
        required: true
    }
})
const productSchema = mongoose.model("product", schema)
module.exports = productSchema