const { Song, Comment } = require("../models/Song");

module.exports = {
  index: (req, res) => {
    Song.find({}).then(songs => {
      res.render("index", { songs });
    });
  },
  show: (req, res) => {
    Song.findOne({ _id: req.params.id }).exec(function(err, song) {
      Comment.populate(song.comments, { path: "author" }, function(
        err,
        comments
      ) {
        song.comments = comments;
        res.render("song/show", song);
      });
    });
  },
  new: (req, res) => {
    res.render("song/new");
  },
  create: (req, res) => {
    Song.create({
      name: req.body.song.name,
      artist: req.body.song.artist,
      year: req.body.song.year,
      genre: req.body.song.genre
    }).then(song => {
      res.redirect(`song/${song._id}`);
    });
  },
  update: (req, res) => {
    let { content } = req.body;
    Song.findOne({ _id: req.params.id }).then(song => {
      song.comments.push({ content });
      song.save(err => {
        res.redirect(`/song/${song._id}`);
      });
    });
  },
  delete: (req, res) => {
    Song.findOneAndRemove({ _id: req.params.id }).then(song => {
      res.redirect("/");
    });
  }
};
