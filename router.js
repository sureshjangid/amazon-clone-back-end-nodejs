const mongoose = require("mongoose");
const express = require("express");
const router = new express.Router();
const Products = require("./models/productSchema");
const { application } = require("express");
const User = require('./models/userSchema');
// getProduct data
router.get("/getProduct", async (req, res) => {
  const getProduct = await Products.find();
  res.status(201).json(getProduct);
});

// getSingle product
router.get("/single-product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleData = await Products.findOne({ id: id });
    res.status(201).json(singleData);
  } catch (error) {
    console.log('error' , error.message)
  }
});


// User SignIn


      // const insetData =  new User({
        //  name,email,mobile,password
      //  })
      //  const storeData = await insetData.save();
      // console.log(storeData,'storeDatastoreData')
      //  res.status(200).json(storeData)
    // }

// })


module.exports = router;
