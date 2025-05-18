const express = require("express")
const apiRoute = require("./api")
const router = express.Router()

router.use(process.env.VERSION_API, apiRoute)

module.exports = router