const { User } = require('../models/twilightUserModel');
const bcrypt = require('bcrypt');

const userSignUpAuth = async (req,res) => {
    const user = await User.findOne({email: req.body.email});
    if (!user) {
        return res.status(400).send({message: "Invalid email"});
    }
    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if (!validPassword) {
        return res.status(400).send({message: "Invalid password"});
    }
    const token = user.generateAuthToken();
    res.status(200).send({token: token,message: "Signing in...."});
};

module.exports = {
    userSignUpAuth
}