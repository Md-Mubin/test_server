const emailValid = require("../helpers/emailValid")
const inquriSchema = require("../models/inquriSchema")

const inquriesAuth = async (req, res) => {

    try {
        const { name, email, phone, companyName, budget, description } = req.body

        if (!name) return res.status(400).send({ errMsg: "Name Required" })

        if (!email) return res.status(400).send({ errMsg: "Email Required" })

        if (!emailValid(email)) return res.status(400).send({ errMsg: "Email is not Valid" })

        // checking if inqury already exists
        const existInqury = await inquriSchema.findOne({ email })
        if (existInqury) return res.status(400).send({ errMsg: "Request Already Send" })

        if (!phone) return res.status(400).send({ errMsg: "Phone Required" })

        if (!companyName) return res.status(400).send({ errMsg: "Company Name Required" })

        if (!budget) return res.status(400).send({ errMsg: "Please Select A Budget" })

        if (!description) return res.status(400).send({ errMsg: "Field Required" })

        // creating and storing new data
        const newInquries = new inquriSchema({
            name, email, phone, companyName, budget, description
        })

        newInquries.save()

        return res.status(200).send({ success: "Request Successfull" })
    } catch (error) {
        return res.status(500).send({ errMsg: "Server Error" })
    }
}

module.exports = inquriesAuth