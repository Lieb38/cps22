// front end access backend

// import any needed libraries
const express = require("express");
const User = require('../models/user'); // access funcs in user model file
const router = express.Router();

// all routes
router
    .post('/login', async (req, res) => {
        try {
            const user = await User.login(req.body.username, req.body.password);
            res.send({...user._doc, password: undefined});
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .post('/register', async (req, res) => {
        try {
            const user = await User.register(req.body.username, req.body.password);
            res.send({...user._doc, password: undefined});
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .put('/update', async (req, res) => {
        try {
            const user = await User.updatePassword(req.body.id, req.body.password);
            res.send({...user._doc, password: undefined}); 
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .delete('/delete', async (req, res) => {
        try {
            await User.deleteUser(req.body.id);
            res.send({success: "Account deleted"});
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

module.exports = router;