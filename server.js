const express = require('express')
const http = require('http')
const nodemailer = require("nodemailer");
const path = require('path')
const routes = require('./routes')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const server = http.createServer(app)
const { connection } = require("./db")
const PORT = process.env.PORT || 3001


app.use(cors()) 
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('tiny'))

app.use("/api", routes);

connection.on("error", console.error.bind(console, "connection error:"))

connection.once("open", () => {
  console.log("Connectado a la DB puerto", PORT)
  server.listen(PORT, () => console.log(`Server conectado y escuchando en Cluster`))
})







