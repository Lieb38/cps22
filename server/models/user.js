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

    const newUser = await User.create({
        username: username,
        password: password
    });

    return newUser;
}
// read user (logging in)
async function login(username, password) {
    const user = await getUser(username);
    if(!user) throw Error('User not found');
    if(user.password != password) throw Error('Wrong password');

    return user;
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
module.exports = {register, login, updatePassword, deleteUser};