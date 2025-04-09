const express = require("express")
const emailSubs = require("../../controller/emailSubs")
const apiRoute = express.Router()

apiRoute.post("/emailSubscribers", emailSubs)

module.exports = apiRoute