require('dotenv').config()

const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./config/db")
const router = require("./router")

app.use(express.json())
app.use(cors({
    origin : "https://codano-p.vercel.app",
    credentials : true,
    methods : ["GET", "POST"]
}))
app.use(router)

db()

const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log("port connect")
})