const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../../Models/PostModel');


//@route Get api/posts/
//@desc get all posts
//@access public
router.get("/", (req,res)=>{
    Post.find({})
    .sort({created : -1})
    .then(data => res.status(200).json(data))
    .catch(err => res.json(err))
    
}); //returns all the posts sorted by date=> most recent first

//@route Post api/posts/ with a user id in body
//@desc post a new post
//@access public
router.post("/",(req,res)=>{
    id = new mongoose.Types.ObjectId;
    const newPost = new Post({ 
        _id: id ,
        postedBy : req.body.userId, //this makes a ref to 
        //user _id which is an object id and would return 
        //an error if the id parsed is not an object id
        TextContent: req.body.text,
        ImageContent : req.body.Image,
        likes: [] ,
        Comments: [] });
    newPost.save()
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
    
    
});  

//@route delete api/posts
//@desc delete all posts 
//@access public (to be reviewed)
router.delete("/",(req,res)=>{
    Post.remove()
    .then(result =>res.json({message:"all deleted successfully"}))
    .catch(err => res.json(err))
});



//@route /api/posts/
//@desc find posts by their id
//@access public

router.get("/:id",(req,res)=>{
    Post.findById({ _id: req.params.id },
        '_id TextContent ImageContent postedBy created likes comments '
        ,(result , err)=>{
            if(err){ 
                res.status(500).json(err)
            }else{
                res.status(200).send(result)
            }
        }
    );
});

//@route /api/posts/:user_id
//@desc find the posts posted by a certain user for his porfile
// @access public

router.get('/user/:userID',(req,res)=>{
    Post.find({ postedBy : req.params.userID }, '_id TextContent ImageContent postedBy created likes comments ')
    .sort({created : -1})
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

//=========================== what's above works just fine==================================================//






module.exports = router;


//to show posts according to the friends,
// consider this
//  https://stackoverflow.com/questions/51693818/how-to-filter-mongoose-collection-by-id-node-js
