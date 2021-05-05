const mongoose = require('mongoose');
const MessageSchema = mongoose.Schema({
    message: {
        type: String,  required: true
    },
    recipient:
    {
        type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true
    },
    sender:
    {
        type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true
    }
},
    {
        timestamps: true
    });
module.exports = Chat = mongoose.model('chat', MessageSchema);

//to retreive messages
// Message.find(({ user: id_user and sender: dfsdf })
//     .sort({ updatedAt: -1 })
//     .limit(20)