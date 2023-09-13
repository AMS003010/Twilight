const mongoose = require('mongoose');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const passwordComplexity = require('joi-password-complexity');

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    likedsongs: {
        type: [String],
        default: []
    },
    playlists: {
        type: [String],
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    img: {
        type: String,
        default: ""
    }  
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id,name: this.name,isAdmin: this.isAdmin},
        process.env.SECRET,
        { expiresIn: '3d'}
    );
    return token;
};

const validate = (twuser) => {
    const schema = joi.object({
        name: joi.string().min(3).max(20).required(),
        email: joi.string().email().required(),
        password: passwordComplexity().required(),
        day: joi.string().required(),
        month: joi.string().required(),
        year: joi.string().required(),
        gender: joi.string().valid("male","female","non-binary").required(),
        img: joi.string(),
    })
    return schema.validate(twuser);
};

const User = mongoose.model('twuser',userSchema);

module.exports = {User,validate};