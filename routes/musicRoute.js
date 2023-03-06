const express = require("express");
const testController = require("../controllers/musicController");
const router = express.Router();

router.get("/list", testController.musicList);
router.put("/update/:musicID", testController.updateMusic);
router.delete("/remove/:musicID", testController.deleteMusic);

router.post("/create", testController.createMusic);

module.exports = router;
