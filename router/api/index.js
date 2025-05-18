const express = require("express")
const emailSubs = require("../../controller/emailSubs")
const inquriesAuth = require("../../controller/inquriesAuth")
const apiRoute = express.Router()

apiRoute.post("/emailSubscribers", emailSubs)
apiRoute.post("/inquiresDatas", inquriesAuth)

module.exports = apiRoute