const {User,validate} = require('../models/twilightUserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { use } = require('../routes/songRoute');

const generateAuthToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn: '3d'})
}

const addUser = async (req,res) => {
    console.log("addUser")
    console.log(req.body)
    const {error} = validate(req.body);
    if (error) {
        return res.status(400).send({error: error.details[0].message});
    }
    const user = await User.findOne({email: req.body.email});
    if (user) {
        return res.status(403).send({error: "User with given email already exists!"});
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    let newUser = await new User({
        ...req.body,
        password: hashPassword,
    }).save();
    newUser.password=undefined;
    newUser.__v = undefined;
    const token = generateAuthToken(newUser._id);
    const email = newUser.email;
    res.status(200).send({email,token});
}

const getAllUsers = async (req,res) => {
    const users_data = await User.find().select("-password -__v");
    res.status(200).send({data: users_data});
};

const getUser = async (req,res) => {
    const user = await User.findById(req.params.id);
    res.status(200).send({data: user});
};

const  updateUser = async (req,res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new: true}
    ).select("-password -__v");
    res.status(200).send({data: user,message: "Profile updated successfully"});
};

const deleteUser = async (req,res) => {
    await User.findByIdAndDelete(
        req.params.id
    );
    res.status(200).send({message: "Successfully deleted profile"});
};

const findUserByEmail = async (req, res) => {
    const userEmail = req.query.email;
    const user = await User.findOne({ email: userEmail });

    if (!user) {
        return res.status(404).send({ error: "User not found" });
    }

    res.status(200).send({ data: user });
};



module.exports = {
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    findUserByEmail
};