require('dotenv').config()

const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./config/db")
const router = require("./router")

app.use(express.json())
app.use(cors({
    origin : "https://codano-p.vercel.app",
    credentials : true
}))
app.use(router)

db()

app.listen(process.env.PORT , ()=>{
    console.log("port connect")
})