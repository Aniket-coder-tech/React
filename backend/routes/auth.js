const express=require('express')
const router=express.Router();
const User=require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const JWT_KEY="Aniketcan"
const fetchUser=require("../middleware/fetchUser")
const { body, validationResult } = require('express-validator');
router.get('/getuser',fetchUser,async(req,res)=>{
    try{
        const id=req.user.id;
        const user= await User.findById(id).select("-password");
        res.json(user);
    }
    catch(error){
        res.send(error);
    }
})
router.post('/createuser',[body("email").isEmail().isLength({min:5})],async(req,res)=>{
    const salt = await bcrypt.genSaltSync(10);
const hash = await bcrypt.hashSync(req.body.password, salt);
    const user=User({
        "name":req.body.name,
        "email":req.body.email,
        "password":hash
    })
   
    res.send("Ok")
    user.save();
    

})
router.post('/login',async(req,res)=>{
   
        const user=await User.findOne({email:req.body.email});
    const pass=await bcrypt.compare(req.body.password, user.password);
    if(user && pass){
        const authtoken=await jwt.sign({ user:{id:user.id }}, JWT_KEY);
        res.json({authtoken:authtoken,success:"true"});
    }
    else{
        res.json({authtoken:" ",success:"false"});
    }
    
   
    
  
})
module.exports=router