const mongoose = require("mongoose")
const schema = mongoose.Schema({
    "SubCatName": {
        type: String,
        required: true
    },
    "categoryId": {
        type: mongoose.Schema.Types.ObjectId,
        ref:"category",
        required: true
    }
})
const subCatSchema = mongoose.model("Subcategory", schema)
module.exports = subCatSchema