// Lieb Mathieson

// import mongoose
const mongoose = require("mongoose");

// monster Schema
const monsterSchema = new mongoose.Schema({
    // monsterId is provided by mongoDb
    monsterName: String,
    attack: Number,
    hp: Number,
    boss: Boolean
});

// model of schema
const Monster = mongoose.model("Monster", monsterSchema);

// CRUD functions of model

// create a monster
async function create(monsterName, attack, hp, boss) {

    const newMonster = await Monster.create({
        monsterName: monsterName,
        attack: attack,
        hp: hp,
        boss: boss
    });
    return newMonster;
}

// power up monster (update)
async function powerUp(id, hp, attack) {
    const monster = await Monster.updateOne({"_id": id}, {$set: {hp: hp, attack: attack} });
    return monster;
}

// vanquish monster (delete)
async function vanquish(id) {
    await Monster.deleteOne({"_id": id});
}

// export functions for routes access
module.exports = {create, powerUp, vanquish};

