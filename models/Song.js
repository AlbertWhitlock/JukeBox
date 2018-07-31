const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
    content: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})


const Song = new Schema({
    name: String,
    artist: String,
    year: Number,
    genre: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = {
    Song: mongoose.model("Song", Song),
    Comment: mongoose.model("Comment", Comment)
};