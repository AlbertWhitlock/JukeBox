const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.js");

router.post("/", userController.create);
router.get(":id", userController.show);
router.get("/new", userController.new);

module.exports = router;