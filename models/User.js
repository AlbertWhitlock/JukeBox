const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
    username: String,
    password: String,
    songs: [
    {
       type: Schema.Types.ObjectId,
       ref: "Song"
    } 
    ]
});

module.exports = mongoose.model("User", User);