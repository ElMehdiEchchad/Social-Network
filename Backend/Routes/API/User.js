const express = require("express");
const router = express.Router();
const userModel = require("../../Models/userModel");
const checkAuth = require("../../Middleware/check-auth");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

//@route GET api/users/
//@desc get all users
//@access Public

router.get("/api/users", async (req, res) => {
    userModel.find({}, async (err, data) => {
        if (err) {
            await res.status(500).send();
        } else {
            res.status(200).send(data);
        }
    });
});

//@route GET api/user/:id/isOnline
//@desc make a user Online or offline
//@access Public
router.put("/api/user/:id/isOnline", async (req, res) => {
    userModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
            isOnline: req.body.isOnline
        }, { new: true },
        async (err, data) => {
            if (err) {
                await res
                    .status(500)
                    .send(`Cannot find user with this ID : ${req.params.id}`);
            } else {

                res.status(200).json({
                    message: `isOnline is updated to ${data.isOnline}`
                });
            }
        })
})

router.use(checkAuth);

router.get("/api/users/auth", async (req, res) => {
    res.status(200).json({
        message: "Auth successful",
        data: req.userData,
    });
});





//@route GET api/user/:id
//@desc get user by ID
//@access Public
router.get("/api/user/:id", checkAuth, async (req, res) => {
    userModel.findById({ _id: req.params.id }, '_id firstName lastName email profileImage friends isOnline birthDay', async (err, data) => {
        if (err) {
            await res
                .status(500)
                .send(`Cannot find user with this ID : ${req.params.id}`);
        } else {
            res.status(200).send(data);
        }
    });
});

//@route DELETE api/user/:id
//@desc delete user by ID
//@access Public
router.delete("/api/user/:id", checkAuth, async (req, res) => {
    userModel.findOneAndRemove({ _id: req.params.id }, async (err, data) => {
        if (err) {
            await res
                .status(500)
                .send(`Cannot find user with this ID : ${req.params.id}`);
        } else {
            res.status(200).json({
                message: "User has been deleted",
            });
        }
    });

});
//@route DELETE api/user/
//@desc delete ALL users this is just for testing
//@access Public
router.delete("/api/users", async (req, res) => {
    userModel.remove({}, async (err, data) => {
        if (err) {
            await res.status(500).json({
                error: err,
            });
        } else {
            res.status(200).json({
                message: "ALL Users have been deleted",
            });
        }
    });
});

//@route PUT api/user/:id
//@desc update user by ID
//@access Public
router.put("/api/user/:id", checkAuth, async (req, res) => {
    userModel.findOne({ _id: req.params.id }, (err, foundObject) => {
        if (req.body.firstName !== undefined) {
            foundObject.firstName = req.body.firstName;
        }
        if (req.body.lastName !== undefined) {
            foundObject.lastName = req.body.lastName;
        }
        if (req.body.birthDay !== undefined) {
            foundObject.birthDay = req.body.birthDay;
        }
        if (req.body.profileImage !== undefined) {
            foundObject.profileImage = req.body.profileImage;
        }
        foundObject.save((e, updatedTodo) => {
            if (err) {
                res.status(500).json({
                    error: err,
                });
            } else {
                res.send(updatedTodo);
            }
        });
    });
});

//@route PUT api/user/:id/friends
//@desc add a friend to a user
//@access Public
router.put("/api/user/:id/friends", checkAuth, async (req, res) => {
    userModel.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { friends: { id_friend: req.body.id_friend } } },
        { new: true },
        async (err, data) => {
            if (err) {
                await res
                    .status(500)
                    .send(`Cannot find user with this ID : ${req.params.id}`);
            } else {
                res.status(201).json({
                    message: "friend added to the list of friends"
                });
            }
        }
    );
    userModel.findByIdAndUpdate(
        { _id: req.body.id_friend },
        { $push: { friends: { id_friend: req.params.id } } },
        { new: true },
        async (err, data) => {
            if (err) {
                await res
                    .status(500)
                    .send(`Cannot find user with this ID : ${req.params.id}`);
            } else {
                res.status(201).json({
                    message: "friend added to the list of friends"
                });
            }
        }
    );
});

//@route DELETE api/user/:id/friends
//@desc delete a friend of a user
//@access Public
router.delete(
    "/api/user/:id/friend/:idfriends",
    checkAuth,
    async (req, res) => {
        userModel.findByIdAndUpdate(
            { _id: req.params.id },
            { $pull: { friends: { id_friend: req.params.idfriends } } },
            { new: true },
            async (err, data) => {
                if (err) {
                    await res.status(500).json({
                        message: `Cannot find user with this ID : ${req.params.id}`,
                    });
                } else {
                    res.status(200).send(data);
                }
            }
        );
        userModel.findByIdAndUpdate(
            { _id: req.params.idfriends },
            { $pull: { friends: { id_friend: req.params.id } } },
            { new: true },
            async (err, data) => {
                if (err) {
                    await res.status(500).json({
                        message: `Cannot find user with this ID : ${req.params.id}`,
                    });
                } else {
                    res.status(200).send(data);
                }
            }
        );
    }
);

//@route GET api/user/:id/friends
//@desc get all friends of a sprecific user
//@access Public
router.get("/api/user/:id/friends", async (req, res) => {
    userModel.findById({ _id: req.params.id }, async (err, data) => {

        if (err) {
            await res
                .status(500)
                .json({
                    message: "error",
                    err: err
                })
        } else {
            if (data.friends.length == 0) {
                res.status(200).json({
                    message: "there is no friend"
                });
            } else {
                var listOfFriends = [];
                const itteration = data.friends.map(async (idFriendObject) => {
                    const idFriend = idFriendObject.id_friend;
                    return userModel.findById({ _id: idFriend }, '_id firstName lastName email profileImage friends isOnline birthDay', async (err, data) => {
                        if (err) {
                            await res
                                .status(500)
                                .json({
                                    message: "error",
                                    err: err
                                })
                        } else {
                            await listOfFriends.push(data);


                        }
                    });
                })

                return Promise.all(itteration).then(() => {
                    listOfFriends.sort((a, b) => {
                        var nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }

                        // names must be equal
                        return 0;
                    });
                    res.status(200).json({
                        message: "list of friends finded",
                        friends: listOfFriends
                    })
                }
                )


            }

        }
    });
});





//@route GET api/user/:id/updateImage
//@desc upload image of a user
//@access Public

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage });


router.put('/api/user/:id/updateImage/', upload.single('myImage'), (req, res, next) => {

    var obj = {
        data: fs.readFileSync(path.join('public/' + req.file.filename)),
        contentType: 'image/png'
    }
    //res.send(req.file.filename)
    // console.log(obj.img)
    userModel.findOne({ _id: req.params.id }, (err, item) => {
        item.profileImage = obj
        item.save((e, updatedTodo) => {
            if (err) {
                res.status(500).json({
                    error: err,
                });
            } else {
                fs.unlink(path.join('public/' + req.file.filename), (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                })
                res.status(200).json({
                    message: "image Updated"
                });
            }
        });
    });
});



//@route GET api/search/?quey:"dsdsdsds"
//@desc searching for a user
//@access Public
router.get('/api/search/', async (req, res) => {
    userModel.find(
        { $text: { $search: req.query.query ,$regex: req.query.query} },
        '_id firstName lastName email profileImage friends isOnline birthDay score')
        .select({ "score": { "$meta": "textScore" } })
        .sort({ "score": { "$meta": "textScore" } })
        .exec(function (err, data) {
            if (err) {
                res.status(500).json({
                    message: "error",
                    error: err
                })
            } else {
                res.status(200).json({
                    message: "search successful",
                    data: data
                })
            }
        });
})




module.exports = router;
