const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

 const Post = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,  
  
  TextContent: {
    type: String,
    default: null
  },

  Imagecontent: {
    type: String,
    default:null
  },

  postedBy: {
    type: ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now 
  },

  likes: [{ type: ObjectId, ref: 'User' }],

  comments: [
      {
        text: String,
        created: { type: Date, default: Date.now() },
        postedBy: { type: ObjectId, ref: 'User' }
      }
    ]
});

module.exports = mongoose.model('Post', Post);


//when the user is successfully logged in the token 
// is sent, which contains the user id 