const { Song, Comment } = require("../models/Song");
const User = require("../models/User");

module.exports = {
    show: (req, res) => {
        Song.findOne({ _id: req.params.id })
            .populate("author")
            .exec(function (err, song) {
                Comment.populate(song.comments, { path: "author" }, function (err, comments) {
                    song.comments = comments;
                    res.render("song/show", song);
                });
            });
    },
    new: (req, res) => {
        Song.find({}).then(users => {
            res.render("song/new");
        });
    },
    create: (req, res) => {
        Song.create({
            name: req.body.song.name,
            artist: req.body.song.artist,
            year: req.body.song.year,
            genre: req.body.song.genre
        }).then(song => {
                req.user.songs.push(song);
                req.user.save(err => {
                    res.redirect(`/song/${song._id}`);
                });
        });
    },
    update: (req, res) => {
        let { name, artist, year, genre } = req.body;
        Song.findOne({ _id: req.params.id }).then(song => {
            song.comments.push({ name, artist, year, genre });
            song.save(err => {
                res.redirect(`/song/${song._id}`);
            });
        });
    },
    delete: (req, res) => {
        Song.findOneAndRemove({ _id: req.params.id }).then(song => {
            res.redirect('/');
        });
    }
};