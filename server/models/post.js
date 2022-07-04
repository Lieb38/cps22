// import mongoose
const mongoose = require("mongoose");

// post entity schema
const postSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    content: String,
    likes: Number
})

// model of schema
const Post = mongoose.model("Post", postSchema);


// CRUD functions on model

// create a post
async function create(userId, content) {

    const newPost = await Post.create({
        userId: userId,
        content: content,
    });
    return newPost;
}

// read post
async function getAll(userId) {
    const posts = getPosts(userId)
    //await Post.findOne({userId: userId}, {"_id": id});
    if(!posts) throw Error('Post not found');

    return posts;
}

// read post
async function read(userId, id) {
    const post = getPost(id);
    //await Post.findOne({userId: userId}, {"_id": id});
    if(!post) throw Error('Post not found');

    return post;
}

// update post
async function updatePost(userId, id, content) {
    const user = getPost(id)
    if(userId != user.userId) throw Error('cannot alter other posts');
    const post = await Post.updateOne({"_id": id}, {$set: {content: content}});
    return post;
}

// delete post
async function deletePost(id) {
    await Post.deleteOne({"_id": id});
}


// utility functions:
// get post
async function getPost(id) {
    return await Post.findOne({"_id": id});
}

async function getPosts(userId) {

    return await Post.find({});
}

// export functions for routes access
module.exports = {create, read, updatePost, deletePost, getAll, getPosts};