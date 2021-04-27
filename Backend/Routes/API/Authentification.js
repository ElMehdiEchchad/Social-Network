const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userModel = require('../../Models/userModel');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


//@route POST api/users/login
//@desc login user
//@access Public
router.post('/login', async (req, res) => {
    userModel.find({ email: req.body.email }, async (err, user) => {
        if (err) {
            res.status(500).json({
                error: err
            })
        } else {
            if (user.length == 0) {
                res.status(401).json({
                    error: `No User with this Email : ${req.body.email}`
                })
            } else {
                try {
                    if (await bcrypt.compare(req.body.password, user[0].password)) {
                        const token = jwt.sign(
                            {
                                userId: user[0]._id,
                                email: user[0].email

                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "1h"
                            },

                        );

                        res.status(200).json({
                            message: "Auth successful",
                            Token: token
                        });
                    } else {
                        res.status(401).json({
                            message: "Auth failed"
                        })
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
router.post('/register', async (req, res, next) => {
    userModel.find({ email: req.body.email }, async (err, data) => {
        if (err) {
            res.status(500).json({
                error: err
            })
        } else {
            if (data.length >= 1) {
                res.status(409).json({
                    message: "this Email Already Exist"
                })
            } else {
                try {
                    const salt = await bcrypt.genSalt(10);
                    // const hashedPassword = await bcrypt.hash(req.body.password, salt);
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if (err) {
                            return res.status(500).json({
                                error: err
                            })
                        } else {
                            const user = {
                                _id: new mongoose.Types.ObjectId(),
                                firstName: req.body.firstName,
                                lastName: req.body.lastName,
                                birthDay: req.body.birthDay,
                                profileImage: req.body.profileImage,
                                email: req.body.email,
                                password: hash,
                                friends: []
                            };
                            let usermodel = new userModel(user);
                            usermodel
                                .save()
                                .then(result => {
                                    res.status(201).json(
                                        {
                                            message: 'User Created'
                                        }
                                    )
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        error: err
                                    })
                                }
                                );
                        }
                    });

                    // res.json(usermodel);
                    // var token = jwt.sign({ id: user._id }, config.secret, {
                    //     expiresIn: 86400 // expires in 24 hours
                    // });
                    // res.status(200).send({ auth: true, token: token });
                } catch (err) {
                    res.status(500).json({
                        error: err
                    })
                }
            }
        }
    }
    )
})
module.exports = router;