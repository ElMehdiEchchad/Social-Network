const express = require("express");
const router = express.Router();
const userModel = require("../../Models/userModel");
const bcrypt = require("bcrypt");
const checkAuth = require("../../Middleware/check-auth");

//@route GET api/users/
//@desc get all users
//@access Public

router.use(checkAuth);

router.get("/api/users/auth", async (req, res) => {
    res.status(200).json({
        message: "Auth successful",
        data: req.userData,
    });
});

router.get("/api/users", async (req, res) => {
    userModel.find({}, async (err, data) => {
        if (err) {
            await res.status(500).send();
        } else {
            res.status(200).send(data);
        }
    });
});

//@route GET api/user/:id
//@desc get user by ID
//@access Public
router.get("/api/user/:id", async (req, res) => {
    userModel.findById({ _id: req.params.id }, async (err, data) => {
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
//@route DELETE api/user/:id
//@desc delete ALL users user by ID this is just for testing
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
                res.status(200).send(data);
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
    }
);

module.exports = router;
