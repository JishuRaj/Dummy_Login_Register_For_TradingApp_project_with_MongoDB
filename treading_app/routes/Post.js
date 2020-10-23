const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const { register, login } = require("./Validate");
const user = require("../models/post");

const route = express.Router();
const saltRounds = 10;
route.post("/register", async (req, res) => {
  console.log(req.body);
  const { error, value } = register(req.body);
  if (error) return res.status(400).json({
    error:error.details[0].message
  });
  const verify = await user.findOne({ username: req.body.username });
  if (verify) return res.status(400).json({
    error:"user already exist"
  });
  const hashpassword = await bcrypt.hash(req.body.password, saltRounds);

  const users = new user({
    username: req.body.username,
    password: hashpassword,
    email: req.body.email,
  });
  try {
    const usersaved = await users.save();
    res.json(usersaved);
  } catch (err) {
    res.status(400).send(err);
    console.log(err), res.json({ message: err });
  }
});

route.post('/login',async (req,res)=>{
  const {error,value}=login(req.body)
  if(error) return res.status(400).json({
      message:error.details[0].message
  })
  const users=await user.findOne({username:req.body.username})
  if(!users) return res.status(400).json({
      error:'username does not exists'
  })
  const validpass=await bcrypt.compare(req.body.password,users.password)
  if(!validpass) return res.status(400).json({
      error:'password does not exists'
  })
  const token=jwt.sign({_id:users._id},process.env.TOKEN_SECRET)
  res.header('auth-token',token).json({
      message:token
  })
})

module.exports = route;
