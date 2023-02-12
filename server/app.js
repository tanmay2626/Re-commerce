
const express = require("express");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(bodyparser.urlencoded({ extended : true }));
app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost:27017/scrapDB')

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    mobile_no : {type: String, maxLength: 10},
    email: String,
    address : String,
    city : String
});

const productSchema = new mongoose.Schema({
    product_name : String,
    img_url : String,
    description : String,
    price : Number,
    category : String,
    brand : String,
    created_at : Date,
    usage : String,
    seller : [userSchema]
});

const User = mongoose.model("User",userSchema);
const Product = mongoose.model("Product",productSchema);

app.get("/",(req,res)=>{
    res.send("Hello Tanmay")
});

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
});