const express = require('express');
const {userSignUpAuth} = require('../controllers/authController');

const router = express.Router()

router.post("/", userSignUpAuth);

module.exports = router;