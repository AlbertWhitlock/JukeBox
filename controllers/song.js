const { Song, Comment } = require("../models/Song");
const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    console.log("Inside index. Outside the then");
    Song.find({}).then(songs => {
      console.log("Inside index. Inside the then");
      res.render("index", { songs });
    });
  },

  //   show: (req, res) => {
  //     console.log('get gif: ', req.params.id)
  //     Gif.findOne({ _id: req.params.id })
  //       .populate("author")
  //       .populate("comments.author")
  //       .then(gif => {
  //         res.render('gif/show', gif)
  //       })
  //   },

  //   show: (req, res) => {
  //     Song.findOne({ _id: req.params.id })
  //       //.populate("author")
  //       .populate("comments.content")
  //       .then(song => {
  //         res.render("song/show", song);
  //         // res.render(`song/${song._id}`);
  //       });
  //   },

  show: (req, res) => {
    Song.findOne({ _id: req.params.id })
      //.populate("author")
      .exec(function(err, song) {
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
    //   Song.find({}).then(users => {
    res.render("song/new");
    //  });
  },
  create: (req, res) => {
    Song.create({
      name: req.body.song.name,
      artist: req.body.song.artist,
      year: req.body.song.year,
      genre: req.body.song.genre
    }).then(song => {
      //req.user.songs.push(song);
      //req.user.save(err => {
      res.redirect(`song/${song._id}`);
      //});
    });
  },
  update: (req, res) => {
    //you need content, not name/artist/year/genre
    //let { name, artist, year, genre } = req.body;
    let { content } = req.body;
    Song.findOne({ _id: req.params.id }).then(song => {
      //song.comments.push({ name, artist, year, genre });
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
