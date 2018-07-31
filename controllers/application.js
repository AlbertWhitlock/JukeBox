const { Song } = require("../models/Song");

module.exports = {
    index: (req, res) => {
        Song.find({})
            .limit(2)
            .then(songs => {
                res.render("app/index", { songs });
            });
    }
}