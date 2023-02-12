
const express = require("express");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(bodyparser.urlencoded({ extended : true }));
app.use(cors());
app.use(bodyparser.json());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/scrapDB')


const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    mobile_no : {type: String, maxLength: 10},
    email: String,
    address : String,
    city : String,
    wishlist : [mongoose.Schema.Types.ObjectId]
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
    res.send("Hello! it's ScrapYar's Server.")
});

app.post("/register_user", (req, res) => {
    User.findOne({ email: req.body.email }, (err, foundUser) => {
      if (foundUser) {
        res.json({
          status: false,
          message:
            "Your provided Email has already been used. Please use another email address.",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            mobile_no: req.body.mobile_no,
            city: req.body.city,
            address: req.body.address,
            password: hash,
          });
          newUser.save();
          res.json({ status: true, message: "User successfully registered." });
        });
      }
    });
  });

app.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, foundUser) => {
      if (foundUser) {
        bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
          if (result === true) {
            res.json({ status: true, user: foundUser });
          } else {
            res.json({ status: false, message: "Your Password is incorrect" });
          }
        });
      } else {
        res.json({
          status: false,
          message: "We cannot find an account with that email address",
        });
      }
    });
  });

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
});