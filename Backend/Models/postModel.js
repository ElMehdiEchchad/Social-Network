const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

 const Post = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,  
  
  TextContent: {
    type: String,
    default: null
  },

  Imagecontent: {
    data : Buffer,
    contentType : String,
  },

  postedBy: {
    type: ObjectId,
    ref: 'User'
  },
  PosterProfileImage : {
    data : Buffer,
    contentType : String,
  },
  
  PosterFirstname : {
    type : String 

  },
  PosterLastname :{
    type : String
  },

  created: {
    type: Date,
    default: Date.now 
  },

  likes: [{ type: ObjectId, ref: 'User' }],

  comments: [
      {
        Comment: String,
        // created: { type: Date, default: Date.now() },
        postedBy: { type: ObjectId, ref: 'User' },
        posterCommentfn : String ,
        posterCommentln : String , 
        posterCommentProfileImage : String
      }
    ]
});

module.exports = mongoose.model('Post', Post);


//when the user is successfully logged in the token 
// is sent, which contains the user id 