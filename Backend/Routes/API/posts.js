const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../../Models/PostModel');
const { route } = require('./User');


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
        Comments: [],
        PosterProfileImage : req.body.profileImage,
        PosterFirstname : req.body.posterfn,
        PosterLastname : req.body.posterln });
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
        '_id TextContent ImageContent postedBy created likes comments PosterProfileImage PosterFirstname PosterLastname   '
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
    Post.find({ postedBy : req.params.userID }, '_id TextContent ImageContent postedBy created likes comments PosterProfileImage PosterFirstname PosterLastname ')
    .sort({created : -1})
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

//@route /api/posts/:id
//@desc delete a post by its id
router.delete('/:id',(req,res)=>{

    Post.findByIdAndDelete(req.params.id, async (result, err)=>{
        if(err){
            res.status(500).json(err)
        }
        else{
            if(result == null){
             res.status(404).json({message :"this post doesn't exist"})
             }
            else{
                (res.json({message : `the post with the id ${req.params.id} is succcessfully deleted`}))
            }
        }
    });
  
});

// -------------------------------------------------------------- what's Above works fine ------------------------------------------------------



//like a post 
router.put("/like",(req,res)=>{
    const Liid = req.body.likedBy;
    const arr = new Array(req.body.likes);
    // console.log(arr);
    const len = arr.length;
    for(let i=0 ; i<len ; i++){
        if(arr[i].indexOf(Liid)!==-1){
            res.json({message : "you already liked this post"});
            break;
        }
        else{
            Post.findByIdAndUpdate(
            { _id : req.body.id },
                {
                    $push : {  likes : Liid  }
                }
            )
            .then(result => res.status(200).json(result))
            .catch(err => res.status(500).json(err));
        }
    }
    
 
    // console.log(arr.indexOf(Liid));
});



//     Post.findByIdAndUpdate(
//         { _id : req.body.id },
//         {
//             $push : {  likes : Liid  }
//         }
//     )
//     .then(result => res.status(200).json(result))
//     .catch(err => res.status(500).json(err));
// });


//comment a post
router.put("/Comment",(req,res)=>{
    const CommenterId = req.body.commentBy;
    const commentText = req.body.commentText;
    const postId = req.body.id;
    Post.findByIdAndUpdate(
        { _id : postId },
        {
            $push : {  comments : {
                "text" : commentText ,
                "postedBy" : CommenterId
            }  }
        }
    )
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});



module.exports = router;


//to show posts according to the friends,
// consider this
//  https://stackoverflow.com/questions/51693818/how-to-filter-mongoose-collection-by-id-node-js
