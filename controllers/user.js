const User = require("../models/User");
const { Song } = require("../models/Song");

module.exports = {
    show: (req, res) => {
        User.findOne({_id: req.params.id })
        .then(user => {
            res.render("user/show", { user });
        })
    },
    new: (req, res) => {
        res.render("user/new");
    },
    create: (req, res) => {
        User.create({
            username: req.body.username,
            password: req.body.password
        }).then(user => {
            res.redirect(`/user/${user._id}`);
        })
    }
};