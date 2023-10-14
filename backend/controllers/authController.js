const { User } = require('../models/twilightUserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateAuthToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn: '3d'})
}

const userSignUpAuth = async (req,res) => {
    console.log("userSignUpAuth")
    console.log(req.body)
    const user = await User.findOne({email: req.body.email});
    console.log("7")
    if (!user) {
        console.log("9")
        return res.status(400).send({error: "Invalid email"});
    }
    console.log("12")
    const validPassword = await bcrypt.compare(req.body.password,user.password);
    console.log("14")
    if (!validPassword) {
        console.log("16")
        return res.status(400).send({error: "Invalid password"});
    }
    console.log("19")
    const token = generateAuthToken(user._id);
    console.log("21")
    const email = user.email;
    console.log("23")
    console.log("userSignUpAuth  "+email+"  "+token);
    console.log("25")
    res.status(200).send({email,token});
    console.log("response sent")
};

module.exports = {
    userSignUpAuth
}