const express = require('express');
const router  = express.Router();

const {searchFunc} = require('../controllers/searchController');
const auth = require('../middleware/auth');

router.get('/',auth,searchFunc);

module.exports = router;