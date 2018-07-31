const express = require("express");
const router = express.Router();
const songController = require("../controllers/song");

router.post("/", songController.create);
router.get("/new", songController.new);
router.get("/:id", songController.show);
router.put("/:id", songController.update);
router.delete("/:id", songController.delete);

module.exports = router;