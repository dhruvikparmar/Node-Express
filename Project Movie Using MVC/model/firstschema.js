const mongoose = require('mongoose')

const schema = mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "genre": {
        type: String,
        required: true
    },
    "review": {
        type: String,
        required: true
    },
    "image": {
        type: String,
        required: true
    },
    "rating": {
        type: Number,
        required: true
    },
})

const firstschema = mongoose.model("firstschema",schema)
module.exports = firstschema 