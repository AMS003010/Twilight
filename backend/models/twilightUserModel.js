const mongoose = require('mongoose');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const passwordComplexity = require('joi-password-complexity');

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        default: "user_name"
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
        default: "male"
    },
    day: {
        type: String,
        default: "0"
    },
    month: {
        type: String,
        default: "0"
    },
    year: {
        type: String,
        default: "0"
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
    console.log("generateAuthToken")
    const token = jwt.sign(
        { _id: this._id,name: this.name,isAdmin: this.isAdmin},
        process.env.SECRET,
        { expiresIn: '3d'}
    );
    return token;
};

const validate = (twuser) => {
    console.log("validate")
    const schema = joi.object({
        name: joi.string().min(3).max(20),
        email: joi.string().email().required(),
        password: passwordComplexity().required(),
        day: joi.string(),
        month: joi.string(),
        year: joi.string(),
        gender: joi.string().valid("male","female","non-binary"),
        img: joi.string(),
    })
    return schema.validate(twuser);
};

const User = mongoose.model('twuser',userSchema);

module.exports = {User,validate};