const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const musicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    album: [
      { album: String, songs: String },
    ],
    genre: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Music", musicSchema);
