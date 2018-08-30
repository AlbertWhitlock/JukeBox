const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/song", require("./song"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
