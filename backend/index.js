const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors")

const bookRoute = require("./route/book.route")
const userRoute = require("./route/user.route")

const app =express();
app.use(cors());
app.use(express.json())

dotenv.config();
const PORT = process.env.PORT || 5000;
const URL = process.env.MongoDBURL;

//conneted to mdb

try {
 mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 });
 console.log("conneted to DB");
    
} catch (error) {
    console.log("Error :"+error);
    
}

//defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT,()=>{
    console.log(`app listing on port ${PORT}`);
});
