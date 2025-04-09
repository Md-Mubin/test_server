require('dotenv').config()

const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./config/db")
const router = require("./router")

app.use(express.json())
app.use(cors())
app.use(router)

db()

app.listen(8000, ()=>{
    console.log("port connect")
})