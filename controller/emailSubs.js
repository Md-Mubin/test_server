const emailValid = require("../helpers/emailValid")
const emailSchma = require("../models/emailSchma")

const emailSubs = async (req, res) => {

    const { email } = req.body

    try {

        if (!email) return res.status(400).send({ errMsg: "Email Required" })

        if (!emailValid(email)) return res.status(400).send({ errMsg: "Invalid Email" }) // to check if it is actuall email

        // checking if the email already exists
        const existEmail = await emailSchma.findOne({ email })
        if (existEmail) return res.status(400).send({ errMsg: "Already Subscribed" })

        // save email in database
        const newEmail = new emailSchma({
            email
        })
        newEmail.save()

        return res.status(200).send({ success: "Subscribe Successfull" })

    } catch (error) {
        return res.status(500).send({ errMsg: "Internal Server Error" })
    }
}

module.exports = emailSubs