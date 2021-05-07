const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../../Models/PostModel');


//@route Get api/posts/
//@desc get all posts
//@access public
router.get("/", (req,res)=>{
    Post.find({},async(err,data)=>{
        if(err){
            await res.status(500).send()
        }else{
            res.status(200).json(data)
        }
    })
    
});

//@route Post api/posts/
//@desc post an anonym post
//@access public
router.post("/",(req,res)=>{
    id = new mongoose.Types.ObjectId;
    const newPost = new Post({ _id: id ,TextContent: req.body.text});
    newPost.save()
    .then(posts => res.json(posts)).catch(err => res.json(err))
    
    
});  

//@route Post api/posts/:user_id
//@desc post a post of a certain user
//@access public 1.0 => then gonna be updated using the user authentification token
// router.post("/:user_id",(req,res)=>{
//     user_id = req.params.userId;
//     _id = new mongoose.Types.ObjectId;
//     const newPost = new Post({_id:_id, postedBy: user_id, TextContent : req.body.text });
//     newPost.save()
//     .then(posts => res.json(posts)).catch(err => res.json(err))
// });

//@route delete api/posts
//@desc delete all posts 
//@access public (to be reviewed)
router.delete("/",(req,res)=>{
    Post.remove()
    .then(result =>res.json("all deleted successfully"))
    .catch(err => res.json(err))
});

//@route /api/posts/:user_id
//@desc find the posts posted by a certain user
//@access public
router.get("/:user_id",(req,res)=>{
    Post.find({PostedBy : req.params.userId})
    .populate('postedBy','_id name')

});

//@route /api/posts/:post_id
//@desc find posts by their id
//@access public
router.get("/:post_id",(req,res)=>{
    Post.findById(req.params.postId)
    .then(result => res.json(result))
    .catch(err => res.json(err))

});






module.exports = router;