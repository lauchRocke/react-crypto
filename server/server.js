const express = require('express')
const app = express();
const cors = require("cors");

const connectDB = require('./db');
require("dotenv")
  .config();

app.use(
    cors({
        origin: "http://localhost:3006"
    })
)

connectDB();

app.use(express.json());

app.use('/', require('./routes/user.route') )

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server connected")
});