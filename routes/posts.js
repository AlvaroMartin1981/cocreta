const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/create', async (req, res) => {
    try{
        const posts = await Post.create({...req.body})
        res.json({posts})
    }catch(error){
        console.error(error)
    }    
})


router.get('/', async (req, res) => {
    try{
        const posts = await Post.find()
        res.json(posts)

    }catch(error){
        console.error(error)
    }
    
})

router.get('/id/:_id', async (req, res) => {
    try {
       const posts = await Post.findById(req.params._id) 
       res.json(posts)  
    } catch (error) {
       console.error(error)
    }
})

router.get('/title/:title', async (req,res)=>{
    try {
        const posts = await Post.find({title: req.params.title})
        res.json(posts)  
        
    } catch (error) {
        console.error(error)
    }
} ) 

router.put('/id/:_id', async (req, res) => {
    try {
       const posts = await Post.findByIdAndUpdate(req.params._id, {title:req.body.title}, {new: true} ) 
       res.json(posts)  
    } catch (error) {
       console.error(error)
    }
})

router.delete('/id/:_id', async (req, res) => {
    try {
        const posts = await  Post.findByIdAndDelete(req.params._id);
        res.json({mensaje: "post delete", posts})
    } catch (error) {
        
    }
})

module.exports =  router; 