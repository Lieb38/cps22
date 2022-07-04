//bcrypt.js
const bcrypt = require('bcryptjs');

// import mongoose
const mongoose = require("mongoose");

// user entity schema
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    followers: [String],
    following: [String]
})

// model of schema
const User = mongoose.model("User", userSchema);

// CRUD functions on model
// create a user
async function register(username, password) {
    const user = await getUser(username);
    if(user) throw Error('username already in use');

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const newUser = await User.create({
        username: username,
        password: hashed
    });
    return newUser._doc;

}

// read user (logging in)
async function login(username, password) {
    const user = await getUser(username);
    if(!user) throw Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw Error('Wrong password');

    console.log(user._doc);
    return user._doc;

}

// update password
async function updatePassword(id, password) {
    const user = await User.updateOne({"_id": id}, {$set: {password: password}});
    return user;
}

// delete user
async function deleteUser(id) {
    await User.deleteOne({"_id": id});
}

// utility functions:
// get user
async function getUser(username) {
    return await User.findOne({"username": username});
}


// export functions for routes access
module.exports = {register, login, updatePassword, deleteUser, getUser};