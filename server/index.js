const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/Route")
const cors = require('cors');
const bodyParser = require('body-parser')


const app = express();

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
console.log(MONGO_USER);
console.log(MONGO_PASSWORD);

const mongoURL = `mongodb+srv://dummy:dummy@cluster0.58tsf96.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(mongoURL)
    .then(() => console.log("mongo is Connected succesfully ..."))
    .catch((e) => {
        console.log(e);
    });

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.get("/",(req,res) =>{
    res.send("hello");
})

app.use("/",route);

const PORT =  process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`listening onf port ${PORT} ...${MONGO_USER}`);
})