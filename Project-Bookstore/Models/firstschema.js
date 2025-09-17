const mongoose = require('mongoose');

const schema = mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "name": {
        type: String,
        required: true
    },
    "quntity": {
        type: Number,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
})

const firstschema = mongoose.model('firstschema',schema)
module.exports = firstschema