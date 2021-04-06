const express = require('express');
const router = express.Router();
const userModel = require('../DB/userModel');

router.post('/api/users',async (req,res)=>{
    const {firstName, lastName} = req.body;
    let user = {};
    user.firstName = firstName ; 
    user.lastName = lastName;
    let usermodel =  new userModel(user);
    await usermodel.save();
    res.json(usermodel)
})
// a verifier
router.get('/api/users',async (req,res)=>{
    let usermodel =  new userModel();
    let user = await usermodel.get()
    res.json(user)
})

module.exports = router; 