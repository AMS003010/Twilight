const {User} = require('../models/twilightUserModel');
const {Song,validate} = require('../models/twilightSongModel');
const { route } = require('../routes/songRoute');
const router = require('../routes/songRoute');

const createSong = async (req,res) => {
    const {error} = validate(req.data);
    if(error) {
        return res.status(400).send({message: error.details[0].message})
    }
    const song =  await Song(req.body).save();
    res.status(201).send({data: song , message: "Song created successfully"});
};

const getAllSongs = async (req,res) => {
    const songs = await Song.find();
    res.status(200).send({data: songs});
};

const updateSong = async (req,res) => {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
    });
    res.status(200).send({message: "Song updated successfully"});
}; 

const deleteSong = async (req,res) => {
    await Song.findByIdAndDelete(req.params.id);
    res.status(200).send({message: "Song successfully deleted"});
};

const getRandomSongs = async (req,res) => {
    const songs = await  Song.aggregate([{$sample : {size:10}}])
    res.status(200).send({data:songs});
}

const likeSong = async (req,res) => {
    let endMessage = "";
    const song = await Song.findById(req.params.id);
    if (!song) {
        return res.status(400).send({message: "Song does not exists"});
    }
    const user = await User.findById(req.user._id);
    const index = await user.likedsongs.indexOf(song._id);
    if(index === -1) {
        user.likedsongs.push(song._id);
        endMessage = "Added to liked songs";
    } else {
        user.likedsongs.splice(index,1);
        endMessage = "Removed from liked songs";
    }
    await user.save();
    res.status(200).send({message: endMessage}); 
};

const getLikedSongs = async (req,res) => {
    const user = await User.findById(req.params.id);
    const songs = await Song.find({_id: user.likedsongs});
    res.status(200).send({data: songs});
};

module.exports = {
    createSong,
    getAllSongs,
    updateSong,
    deleteSong,
    likeSong,
    getLikedSongs,
    getRandomSongs    
};