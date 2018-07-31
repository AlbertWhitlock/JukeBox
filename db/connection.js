const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/songs");
mongoose.Promise = Promise;
module.exports = mongoose;