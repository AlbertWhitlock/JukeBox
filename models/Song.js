const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
  content: String
});

const Song = new Schema({
  name: String,
  artist: String,
  year: Number,
  genre: String,
  comments: [Comment]
});

module.exports = {
  Song: mongoose.model("Song", Song),
  Comment: mongoose.model("Comment", Comment)
};
