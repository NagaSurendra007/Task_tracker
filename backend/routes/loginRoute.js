const router = require ("express").Router();

const User = require('../models/loginModule')

router.post("/login",async(req,res) => {
  const newUser = new User({
    username : req.body.username,
    password : req.body.password
  });
  try{
    const user = await newUser.save();
    res.status(201).json(user);
  }
  catch{
    res.status(500).json();
  }
});
module.exports= router;
