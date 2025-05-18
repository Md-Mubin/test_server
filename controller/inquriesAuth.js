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

        return res.status(200).send({ success: "Sent Successfull" })
    } catch (error) {
        return res.status(500).send({ errMsg: "Server Error" })
    }
}

module.exports = inquriesAuth


//         const errors = []

//         if (!name) errors.push({ field: "name", message: "Name is required" })
//         if (!email) {
//             errors.push({ field: "email", message: "Email is required" })
//         } else if (!emailValid(email)) {
//             errors.push({ field: "email", message: "Email is not valid" })
//         }
//         if (!phone) errors.push({ field: "phone", message: "Phone is required" })
//         if (!companyName) errors.push({ field: "companyName", message: "Company name is required" })
//         if (!budget) errors.push({ field: "budget", message: "Please select a budget" })
//         if (!description) errors.push({ field: "description", message: "Project description is required" })

//         // Return early if validation failed
//         if (errors.length > 0) {
//             return res.status(400).json({ errors })
//         }

//         // Check if inquiry already exists
//         const existInqury = await inquriSchema.findOne({ email })
//         if (existInqury) {
//             return res.status(400).json({
//                 errors: [{ field: "email", message: "Request already sent with this email" }]
//             })
//         }

//         // Store inquiry in DB
//         const newInquries = new inquriSchema({ name, email, phone, companyName, budget, description })
//         await newInquries.save()

//         return res.status(200).json({ success: "Sent successfully" })
//     } catch (error) {
//         return res.status(500).json({ errMsg: "Server error" })
//     }
// }

// module.exports = inquriesAuth
