const Music = require("../model/music");

exports.createMusic = (req, res, next) => {
  const title = req.body.title;
  const artist = req.body.artist;
  const album = req.body.album;
  const genre = req.body.genre;

  const music = new Music({
    title: title,
    artist: artist,
    album: album,
    genre: genre,
  });

  music
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Music created succussfully!",
        post: result,
      });
      console.log("music list created");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.musicList = (req, res, next) => {
  Music.find()
    .then((musics) => {
      res
        .status(200)
        .json({ message: "Music Fetched Successfully", musics: musics });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateMusic = (req, res, next) => {
  const musicID = req.params.musicID;

//   if (!error.isEmpty()) {
//     const error = new Error("Validation failred");
//     error.statusCode = 422;
//     throw error;
//   }
  const title = req.body.title;
  const artist = req.body.artist;
  const album = req.body.album;
  const genre = req.body.genre;

  Music.findById(musicID)
    .then((music) => {
      // if (!music) {
      //   const error = new Error("Could not find music.");
      //   error.statusCode = 404;
      //   throw error;
      // }
      music.title = title;
      music.artist = artist;
      music.album = album;
      music.genre = genre;
      return music.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Music file updated!", music: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteMusic = (req, res, next) => {
  const musicID = req.params.musicID;
  Music.findById(musicID)
    .then((music) => {
      if (!music) {
        const error = new Error("Could not find music.");
        error.statusCode = 404;
        throw error;
      }
      return Music.findByIdAndRemove(musicID);
    })
    .then((result) => {
      res.status(200).json({ message: "Deleted music file" });
    })
    .catch((err) => {
      if(!err.statusCode){
         err.statusCode = 500;
      }
      console.log(err);
    });
};
