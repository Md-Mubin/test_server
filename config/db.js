const mongoose = require("mongoose")

const db = ()=>{
    mongoose.connect(process.env.DATA_BASE)
    .then(()=>{
        console.log("database connect")
    })
}

module.exports = db