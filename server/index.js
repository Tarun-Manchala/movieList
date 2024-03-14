const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/Route")
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config();
const path = require('path');

const base_url = "https://movie-list-one-omega.vercel.app/";

const app = express();

const PORT =  process.env.PORT || 4000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const mongoURL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.58tsf96.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(mongoURL)
    .then(() => console.log("mongo is Connected succesfully ..."))
    .catch((e) => {
        console.log(e);
    });

app.get("/",(req,res) =>{
    res.send("hello");
})

app.use(base_url,route);

app.listen(PORT,()=>{
    console.log(`listening onf port ${PORT} ...`);
})