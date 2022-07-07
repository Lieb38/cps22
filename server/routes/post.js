// import any needed libraries
const express = require("express");
const Post = require('../models/post'); // access funcs in post model file
const router = express.Router();

// all routes
router
    .post('/create', async (req, res) => {
        try {
            const post = await Post.create(req.body.userId, req.body.username, req.body.content);
            res.send(post);
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .post('/read', async (req, res) => {
        try {
            const post = await Post.read(req.body.userId, req.body.id);
            res.send(post);
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .get('/getPosts', async (req, res) => {
        try {
            const post = await Post.getPosts();
            res.send(post);
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .put('/update', async (req, res) => {
        try {
            const post = await Post.updatePost(req.body.id, req.body.content);
            res.send(post); 
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .delete('/delete', async (req, res) => {
        try {
          await Post.deletePost(req.body.id);
          res.send({ success: "Post deleted" });
        } catch(error) {
          res.status(401).send({ message: error.message });
        }
      })

module.exports = router;
