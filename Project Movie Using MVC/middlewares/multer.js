const multer = require("multer")

const Storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"public/")
    },
    filename : (req,file,cb)=>{
        cb(null,file.fieldname + "-" +Date.now())
    }
})

const storage = multer({storage : Storage}).single('image')
module.exports = storage