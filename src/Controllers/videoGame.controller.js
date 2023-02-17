import VideoGame from '../models/VideoGame';

export const getVideoGames = async (req, res) => {
  const videoGames = await VideoGame.find();
  res.json(videoGames);
};

/* export const findOneVideoGame = (req, res) => {
  res.json('one task');
}; */
export const addVideoGame = async (req, res) => {
  const newVideoGame = new VideoGame({
    name : req.body.name,
    description : req.body.description,
    releaseDate : req.body.releaseDate
  });

  const videoGameSaved = await newVideoGame.save();
  res.json(videoGameSaved);
};


