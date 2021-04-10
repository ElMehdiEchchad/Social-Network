const express = require('express');
const router = express.Router();
const userModel = require('../../DB/userModel');


//@route POST api/users/
//@desc get all users
//@access Public
router.get('/api/users', async (req, res) => {
    userModel.find({}, async (err, data) => {
        if (err) {
            res.status(500).send()
        } else {
            res.status(200).send(data)
        }
    });
})

module.exports = router;