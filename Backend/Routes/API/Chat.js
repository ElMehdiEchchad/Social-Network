const express = require('express');
const router = express.Router();
const Chat = require('../../Models/chatModel');

// @route post /api/pivatechat/:id
// @desc het all messages betwwen two users
// @access Public
router.get('/api/pivatechat/:idSender/:idRecipient', async (req, res) => {
    Chat.find({
        $or: [
            { $and: [{ sender: req.params.idSender }, { recipient: req.params.idRecipient }] },
            { $and: [{ sender: req.params.idRecipient }, { recipient: req.params.idSender }] }
        ]
    }, async (err, data) => {
        if (err) {
            await res.status(500).json({
                message: "error",
                err: err
            })
        } else {
            res.status(200).send(data)
        }
    }).sort({ updatedAt: 1 });

})

// @route post api/users/
// @desc het all messages betwwen two users
// @access Public
router.post('/api/pivatechat/:id', async (req, res) => {
    try {
        const chat = {
            message:  req.body.message,
            sender:  req.params.id,
            recipient:  req.body.recipient
        }
        let newChat = new Chat(chat)
        newChat
            .save()
            .then(result => {
                console.log("secuss")
                res.status(201).json({
                    message: "data saved",
                    data:result
                })
            })
            .catch(
                err => {
                    console.log(err)
                    res.status(500).json({
                        message: "err",
                        err: err
                    })
                }
            )
    } catch (error) {
        console.log(error)
    }
  
})

//@route DELETE api/user/:id
//@desc delete message between two users
//@access Public
router.delete('/api/pivatechat/:idMessage', async (req, res) => {
    Chat.remove({_id:req.params.idMessage}, async (err, data) => {
        if (err) {
            await res.status(500).json({
                error: err
            })
        } else {
            res.status(200).json({
                message: "message deleted"
            })
        }
    });
})

module.exports = router;