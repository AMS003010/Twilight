const express = require('express');
const router  = express.Router();

const {searchFunc} = require('../controllers/searchController');
const auth = require('../middleware/auth');

router.get('/',searchFunc);  //auth

module.exports = router;