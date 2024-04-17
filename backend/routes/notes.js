const express=require('express')
const router=express.Router();
const User=require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const JWT_KEY="Aniketcan"
const fetchUser=require("../middleware/fetchUser")
const { body, validationResult } = require('express-validator');
const Note=require("../models/Notes")
router.get('/',fetchUser,async(req,res)=>{
    try{
        const id=req.user.id;
      
        const notes= await Note.find({userId:id})
        
        res.send(notes);

    }
    catch(error){
        res.send(error);
    }
})
router.post('/createNote',[body("title").exists().isLength({min:5})],fetchUser,async(req,res)=>{
    const id=req.user.id;

    const note=Note({
        "title":req.body.title,
        "description":req.body.description,
        "userId":id
       
    })
   
    res.send(note)
    note.save();
    

})
router.put('/updateNote/:id',fetchUser,async(req,res)=>{
    let newNote={"title":"","description":""};
   
    if(req.body.title){newNote.title=req.body.title}    
    if(req.body.description){newNote.description=req.body.description}    
    let note=await Note.findById(req.params.id);
    if(!note){
        res.status(404).send("Not found");
    }
    if(req.user.id!=note.userId.toString()){
        res.status(404).send("Not allowed");
    }
    
    note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
    res.json({note});
  
})
router.delete('/deleteNote/:id',fetchUser,async(req,res)=>{
    console.log("hello")
    let note=await Note.findById(req.params.id);
    console.log(note)
    if(!note){
        res.status(404).send("Not found");
    }
    if(req.user.id!=note.userId.toString()){
        res.status(404).send("Not allowed");
    }
    note=await Note.findByIdAndDelete(req.params.id);
    res.json({note});
  
})
module.exports=router