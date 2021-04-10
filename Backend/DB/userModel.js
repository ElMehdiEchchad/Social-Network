const mongoose = require('mongoose');
 const user = new mongoose.Schema({
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
        type:String
    },
    password: {
        type:String
    },
    posts:{
        type:Array
    },
    friends: {
        type:Array
    }
 })
 module.exports = User = mongoose.model('user',user);