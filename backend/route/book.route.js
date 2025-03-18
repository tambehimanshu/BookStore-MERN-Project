const express = require("express");
const {getBook} = require("../controller/book.controller")

const router = express.Router();

router.get("/",getBook);

module.exports =router;

