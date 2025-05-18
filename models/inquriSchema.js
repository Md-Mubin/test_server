const mongoose = require("mongoose")
const SCHEMA = mongoose.Schema

const inquriSchema = new SCHEMA({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    companyName: {
        type: String,
        required: true
    },

    budget: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("inquriesData", inquriSchema)