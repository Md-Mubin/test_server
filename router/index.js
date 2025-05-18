const express = require("express")
const apiRoute = require("./api")
const router = express.Router()

router.use(process.env.VERSION_API, apiRoute)

router.use((req, res) => {
    return res.status(400).send("No Page Found")
})

module.exports = router