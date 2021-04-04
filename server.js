const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv =  require('dotenv')
const routesURL = require("./src/Routes/appRoute")

dotenv.config()


//Connect to mongoose

 mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"))

 
//require route

app.use(express.json())
app.use(cors())
app.use('/app', routesURL)
app.listen(3001, function() {
    console.log("express server is running on port 3001");
})