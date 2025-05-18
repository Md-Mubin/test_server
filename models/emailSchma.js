const mongoose = require("mongoose")
const SCHEMA = mongoose.Schema

const emailSchema = new SCHEMA({
    email : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("emailSubscribe" , emailSchema)