const express = require("express");
const musicController = require("../controllers/musicController");
const router = express.Router();

router.get("/list", musicController.musicList);
router.put("/update/:musicID", musicController.updateMusic);
router.delete("/remove/:musicID", musicController.deleteMusic);

router.post("/create", musicController.createMusic);

// stat

router.get("/count/music",musicController.countMusic);
router.get("/count/artist",musicController.countArtist);

module.exports = router;
