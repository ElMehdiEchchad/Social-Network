const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../../Models/PostModel');
const userModel = require("../../Models/userModel");
const { route } = require('./User');
const multer = require('multer');
// const {v4 : uuid4} = require('uuid');
let path = require('path');
const fs = require('fs');





//@route Get api/posts/
//@desc get all posts
//@access private
router.get("/", (req,res)=>{
    Post.find({})
    .sort({created : -1})
    .then(data => res.status(200).json(data))
    .catch(err => res.json(err))
    
}); //returns all the posts sorted by date=> most recent first

//Configuration of posts to be made 

const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , './posts/');
    },
    filename : function(req, file , cb){
        cb(null , Date.now().toString() + file.originalname);
    }

});

//a filter for the accepted formats 
const fileFilt = (req , file , cb)=>{
   
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg'){
        cb(null , true);
    }
    else{
        cb(new Error('this format cannot be accepted'), false);
    }
  
}
const upload = multer({
    storage : storage ,
     limits :{
    fileSize : 1024*1024*5 //5MB as max for images
    },
    fileFilter : fileFilt
});

//@route Post api/posts/ with a user id in body
//@desc post a new post
//@access private

router.post("/" ,upload.single('Image'),(req,res)=>{
    id = new mongoose.Types.ObjectId;
    console.log(req.file);
  // console.log(fs.readFileSync(path.join('posts/' + req.file.filename)));
    // console.log(req);
    if(req.file == null) {
        const newPost = new Post({ 
            _id: id ,
            postedBy : req.body.userId, //this makes a ref to 
            //user _id which is an object id and would return 
            //an error if the id parsed is not an object id
            TextContent: req.body.text,
            //Imagecontent : {data:fs.readFileSync(path.join('posts/' + req.file.filename)),contentType: 'image/png'},
            likes: [] ,
            Comments: [],
            PosterProfileImage : req.body.profileImage,
            PosterFirstname : req.body.posterfn,
            PosterLastname : req.body.posterln });
            
            newPost.save()
            .then(posts => res.json(posts))
            .catch(err => res.json(err))

    }
    else{
    const newPost = new Post({ 
        _id: id ,
        postedBy : req.body.userId, //this makes a ref to 
        //user _id which is an object id and would return 
        //an error if the id parsed is not an object id
        TextContent: req.body.text,
        Imagecontent : {data:fs.readFileSync(path.join('posts/' + req.file.filename)),contentType: 'image/png'},
        likes: [] ,
        Comments: [],
        PosterProfileImage : req.body.profileImage,
        PosterFirstname : req.body.posterfn,
        PosterLastname : req.body.posterln });
        newPost.save()
        .then(posts => res.json(posts))
        .catch(err => res.json(err))}
  
    
    
});  

//@route delete api/posts
//@desc delete all posts 
//@access private
router.delete("/",(req,res)=>{
    Post.remove()
    .then(result =>res.json({message:"all deleted successfully"}))
    .catch(err => res.json(err))
});



//@route /api/posts/
//@desc find posts by their id
//@access private
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
// @access private
router.get('/user/:userID',(req,res)=>{
    Post.find({ postedBy : req.params.userID }, '_id TextContent ImageContent postedBy created likes comments PosterProfileImage PosterFirstname PosterLastname ')
    .sort({created : -1})
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

//@route /api/posts/:id
//@desc delete a post by its id
//@access private
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

//@route /api/posts/comment
//@desc comment a post
//@access private
router.put("/Comment",(req,res)=>{
    const CommenterId = req.body.commentBy;
    const commentText = req.body.commentText;
    const postId = req.body.id;
    const lastn = req.body.posterln;
    const firstn = req.body.posterfn;
    const CommenterImage = req.body.posterprofileImage;
    Post.findByIdAndUpdate(
        { _id : postId },
        {
            $push : {  comments : {
                "Comment" : commentText ,
                "postedBy" : CommenterId,
                "posterCommentln" : lastn,
                "posterCommentfn": firstn,
                "posterCommentProfileImage" : CommenterImage

            }  }
        }
    )
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});


//@route /api/posts/like
//@desc Like a post
//@access private
router.put("/like",(req,res)=>{
    const Liid = req.body.likedBy;
    const arr = new Array(req.body.likes);
    // console.log(arr);
    
        if(arr[0].indexOf(Liid)!==-1){
            res.json({message : "you already liked this post"});
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
});



//added by lkhadir 
router.get("/user/:id/allPosts",(req,res)=>{
    userModel.findById({ _id: req.params.id }, async (err, data) => {

        if (err) {
            await res
                .status(500)
                .json({
                    message: "error",
                    err: err
                })
        } else {
            if (data.friends.length == 0) {
                res.status(200).json({
                    message: "there is no friend"
                });
            } else {
                var listOfPosts = [];
                const itteration = data.friends.map(async (idFriendObject) => {
                    const idFriend = idFriendObject.id_friend;
                       return Post.find({ postedBy: idFriend },
                        '_id TextContent Imagecontent postedBy created likes comments PosterProfileImage PosterFirstname PosterLastname',
                         async (err, data) => { 
                        if (err) {
                            await res
                                .status(500)
                                .json({
                                    message: "error",
                                    err: err
                                })
                        } else {
                            if(data.length !== 0){
                                data.map((post)=>{
                                    //await listOfPosts.push(post);
                                    return listOfPosts.push(post);
                                })
                            }
                            


                        }
                    });
                })
                return Promise.all(itteration).then(() => {
                    // listOfPosts.sort((a, b) => {
                    //     var nameA = a.created.toUpperCase(); // ignore upper and lowercase
                    //     var nameB= b.created.toUpperCase(); // ignore upper and lowercase
                    //     if (nameA < nameB) {
                    //       return -1;
                    //     }
                    //     if (nameA > nameB) {
                    //       return 1;
                    //     }
                      
                    //     // names must be equal
                    //     return 0;
                    // });
                    listOfPosts.sort((a)=>a.created)
                    res.status(200).json({
                        message: "list of posts finded",
                        Posts: listOfPosts
                    })
                }
                )


            }

        }
    });


})



module.exports = router;
