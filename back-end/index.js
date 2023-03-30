const express = require("express")
const app = express()
const cors = require('cors')
const postRouter = require("./src/Routes/postRouter")
require("./src/Config/db")
require('dotenv').config()
// enable json payload in requests
app.use(express.json())
// cors
app.use(cors())

// route for registering user
// app.use("/api/v1")

// route for creating post
app.use('/api/v1', postRouter)

const port = process.env.PORT
app.listen(port, console.log(`Server is running at PORT ${port}`))