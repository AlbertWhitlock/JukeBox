const { Song } = require("../models/Song");

module.exports = {
    index: (req, res) => {
        Song.find({})
            .limit(10)
            .then(songs => {
                res.render("app/index", { songs });
            });
    }
}