const mongoose = require("mongoose");

const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

const Book = mongoose.model("book",bookSchema);

module.exports= Book;