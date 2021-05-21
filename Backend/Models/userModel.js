const mongoose = require('mongoose');
const user = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthDay: {
        type: Date,
        default:Date.now
    },
    profileImage:  
    {
        data: Buffer,
        contentType: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        required: true
    },
    friends: {
        type: Array,
        
    },
    isOnline:{
        type:Boolean,
        default:false,
    }
})
user.index({firstName: 'text', lastName: 'text'})
module.exports = User = mongoose.model('user', user);