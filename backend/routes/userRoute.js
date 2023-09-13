const express = require('express');
const {
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser 
} = require('../controllers/userController');
const admin = require('../middleware/admin');
const auth = require('../middleware/auth');
const validateObjectId = require('../middleware/validateObjectId');

const router = express.Router()

router.post("/", addUser);

router.get("/",admin,getAllUsers);

router.get('/:id',[validateObjectId,auth],getUser);

router.put('/:id',[validateObjectId,auth],updateUser);

router.delete('/:id',[validateObjectId,auth],deleteUser);

module.exports = router;
