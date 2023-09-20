const {Song} = require('../models/twilightSongModel');
const {Playlist} = require('../models/twilightPlayList');

const searchFunc = async (req,res) => {
    const search  = req.query.search;
    if(search !== ""){
        const songs = await Song.find({
            name: { $regex: search, $option: "i"},
        }).limit(10);
        const playlists =  await Playlist.find({
            name: { $regex: search, $option: "i"},
        }).limit(10);
        const result = {songs,playlists};
        res.status(200).send(result);
    }
    else {
        res.status(200).send({});
    }
};

module.exports = {
    searchFunc
}