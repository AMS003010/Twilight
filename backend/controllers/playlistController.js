const joi = require('joi');
const {Playlist,validate} = require('../models/twilightPlayList');
const {User} = require('../models/twilightUserModel');
const {Song} = require('../models/twilightSongModel');

const createPlayList = async (req,res) => {
    const { error } = validate(req.body);
    if(error) {
        return res.status(400).send({message: error.details[0].message});
    }
    const user = await User.findById(req.body.user);  //req.user._id
    const playlist = await Playlist({...req.body,user:user._id}).save();
    user.playlists.push(playlist._id);
    await user.save();
    res.status(200).send({data: playlist});
};

const editPlayList = async (req,res) => {
    const scheme = joi.object({
        name: joi.string().required(),
        desc: joi.string().allow(""),
        img: joi.string().allow(""),
    });
    const {error} = scheme.validate(req.body);
    if(error) {
        return res.status(400).send({message: error.details[0].message});
    }
    const playlist = await Playlist.findById(req.params.id);
    if(!playlist){
        return res.status(404).send({message: "Playlist does not exist"});
    }
    const user = await User.findById(req.user._id);
    if(!user._id.equals(playlist.user)) {
        res.status(404).send({message: "User is not authorized to edit"})
    }
    playlist.name = req.body.name;
    playlist.desc = req.body.desc;
    playlist.img  = req.body.img;
    await playlist.save();

    res.status(200).send({message: "Updated Successfully"});
};

const addSongToPlayList = async (req,res) => {
    const scheme =joi.object({
        playlistId: joi.string().required(),
        songId: joi.string().required(),
        userId: joi.string().required(),
    });
    const {error} = scheme.validate(req.body);
    if(error) {
        return res.status(400).send({message: error.details[0].message});
    }
    const user = await User.findById(req.body.userId);  //const user = await User.findById(req.user._id);
    const playlist = await Playlist.findById(req.body.playlistId);
    if (!user._id.equals(playlist.user)) {
        return res.status(403).send({message: "User is not authorized to add song"})
    }
    if(playlist.songs.indexOf(req.body.songId) === -1) {
        playlist.songs.push(req.body.songId);
    }
    await playlist.save();
    res.status(200).send({data: playlist,message: "Added to playlist"});
};

const removeSong = async (req,res) => {
    const scheme =joi.object({
        playlistId: joi.string().required(),
        songId: joi.string().required(),
    });
    const {error} = scheme.validate(req.body);
    if(error) {
        return res.status(400).send({message: error.details[0].message});
    }
    const user = await User.findById(req.user._id);
    const playlist = await Playlist.findById(req.body.playlistId);
    if (!user._id.equals(playlist.user)) {
        return res.status(403).send({message: "User is not authorized to remove song"})
    }
    const index = playlist.songs.indexOf(req.body.songId);
    playlist.songs.splice(index,1);
    await playlist.save();
    res.status(200).send({data: playlist,message: "Removed from the playlist"});
};

const getUserPlayLists = async (req,res) => {
    const user = await User.findById(req.user._id);
    const playlists = await Playlist.find({_id: user.playlists});
    res.status(200).send({data: playlists});
};

const getRandomPlaylists = async (req,res) => {
    const playlist = await Playlist.aggregate([{$sample : {size: 10}}]);
    res.status(200).send({data: playlist});
};

const getPlayList = async (req,res) => {
    const playlist = await Playlist.findById(req.params.id);
    if(!playlist) {
        return res.status(404).send({data: playlist});
    }
    const songs = await Song.find({_id: playlist.songs});
    res.status(200).send({data: {playlist,songs}});
};

const getAllPlayLists = async (req,res) => {
    const playlists = await Playlist.find();
    res.status(200).send({data: playlists});
};

const deletePlaylist = async (req,res) => {
    await Playlist.findByIdAndDelete(
        req.params.id
    );
    const playlists = await Playlist.find();
    res.status(200).send({data: playlists});
};

module.exports = {
    createPlayList,
    editPlayList,
    addSongToPlayList,
    removeSong,
    getUserPlayLists,
    getRandomPlaylists,
    getPlayList,
    getAllPlayLists,
    deletePlaylist
};