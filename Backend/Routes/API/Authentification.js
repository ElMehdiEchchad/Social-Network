const express = require('express');
const router = express.Router();
const userModel = require('../../DB/userModel');
const bcrypt = require('bcrypt');

//@route POST api/users/login
//@desc login user
//@access Public
router.post('/api/users/login', async (req, res) => {
    userModel.find({ email: req.body.email }, async (err, data) => {
        if (err) {
            res.status(500).send()
        } else {
            if (data.length == 0) {
                return res.status(500).send(`Cannot find user with this email : ${req.body.email}`)
            } else {
                try {
                    if (await bcrypt.compare(req.body.password, data[0].password)) {
                        res.send("Success")
                    } else {
                        res.send("Not Allowed")
                    }
                } catch {
                    return res.status(500).send()
                }
            }
        }

    }
    );

})
//@route POST api/users/register
//@desc register user
//@access Public
router.post('/api/users/register', async (req, res) => {
    userModel.find({ email: req.body.email }, async (err, data) => {
        if (err) {
            res.status(500).send()
        } else {
            if (data.length > 0) {
                res.status(500).send("this Email Already Exist")
            } else {
                try {
                    const salt = await bcrypt.genSalt(10);
                    const hashedPassword = await bcrypt.hash(req.body.password, salt);
                    const user = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        birthDay: req.body.birthDay,
                        profileImage: req.body.profileImage,
                        email: req.body.email,
                        password: hashedPassword,
                        friends: []
                    };
                    let usermodel = new userModel(user);
                    await usermodel.save();
                    res.status(201).send;
                    res.json(usermodel);
                } catch {
                    res.status(500).send()
                }
            }
        }
    }
    )
})
module.exports = router;