const mongoose = require('mongoose');
 const user = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     firstName: {
         type:String
     },
     lastName: {
        type:String
    },
    birthDay: {
        type:String
    },
    profileImage: {
        type:String
    },
    email: {
        type:String,
        required:true,
        unique:true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type:String,
        required:true
    },
    friends: {
        type:Array
    }
 })
 module.exports = User = mongoose.model('user',user);