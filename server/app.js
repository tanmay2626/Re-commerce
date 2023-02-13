
const express = require("express");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const cors = require("cors");
const app = express();

app.use("/public", express.static("public"));
app.use(bodyparser.urlencoded({ extended : true }));
app.use(cors());
app.use(bodyparser.json());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://twaykar8:bobo2626@cluster0.s9draqp.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true});

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'public/images');
  },
  filename: function(req, file, cb) {   
      cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});


const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });



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
    img : String,
    description : String,
    price : Number,
    category : String,
    brand : String,
    created_at : Date,
    usage : String,
    seller_details : {
      token : mongoose.Schema.Types.ObjectId,
      name : String,
      city : String,
      mobile_no : String
    }
});

const User = mongoose.model("User",userSchema);
const Product = mongoose.model("Product",productSchema);

app.get("/",(req,res)=>{
  res.send("Hello! it's ScrapYar's Server.")
});


app.get("/get_products",(req,res)=>{
  Product.find({},(err,item)=>{
    if(err){
      console.log(err);
    }else{
      res.json(item)
    }
  })
});

app.post("/get_products",(req,res)=>{
  console.log(req.body.seller);
  User.findOne({ _id : req.body.seller },(err,item)=>{
    if(err){
      console.log(err);
    }else{
      console.log(item);
    }
  })
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

  app.post("/add_product",upload.single('img'), (req, res) => {
    const photo = req.file.filename;

    const newProduct = new Product({
      product_name : req.body.title,
      img : photo,
      description : req.body.description,
      price : req.body.price,
      category : req.body.category,
      brand : req.body.brand,
      created_at : req.body.created_at,
      usage : req.body.usage,
      seller_details : {
        token : req.body.user_id,
        name : req.body.username,
        city : req.body.user_city,
        mobile_no : req.body.user_mobile_no
      }
    });
    
    newProduct.save()
           .then(() => res.status(200).json('Product Added'))
           .catch(err => res.status(400).json('Error: ' + err));
})

  // app.post("/add_to_list",(req,res)=>{
  //   Product.findOne({ email: req.body.product_id }, (err, foundItem) => {
  //     if (foundUser) {
  //       res.json({
  //         status: false,
  //         message:
  //           "Your provided Email has already been used. Please use another email address.",
  //       });
  //     }
  // })

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
});