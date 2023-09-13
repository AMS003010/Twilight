const mongoose = require('mongoose');
const joi = require('joi');

const Schema = mongoose.Schema

const ObjectId = mongoose.Schema.Types.ObjectId;

const playListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: "twuser",
        required: true
    },
    desc: {
        type: String
    },
    songs: {
        type: Array,
        default: []
    },
    img: {
        type: String
    },
});

const validate = (playlist) => {
    const schema = joi.object({
        name: joi.string().required(),
        user: joi.string().required(),
        desc: joi.string().allow(""),
        songs: joi.array().items(joi.string()),
        img: joi.string().allow(""),
    });

    return schema.validate(playlist);
}

const Playlist = mongoose.model('playlist',playListSchema);

module.exports = {Playlist,validate};
