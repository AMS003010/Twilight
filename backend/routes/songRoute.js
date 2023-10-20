const express = require('express');
const router = express.Router();
const admin = require('../middleware/admin');
const auth = require('../middleware/auth');
const validateObjectId = require('../middleware/validateObjectId');
const {
    createSong,
    getAllSongs,
    updateSong,
    deleteSong,
    likeSong,
    getLikedSongs
} = require('../controllers/songController');

router.post('/',createSong); // admin needed

router.get('/',getAllSongs);

router.put('/:id',[validateObjectId,admin],updateSong);

router.delete('/:id',[validateObjectId,admin],deleteSong);

router.put('/like/:id',[validateObjectId,auth],likeSong);

router.get('/like/:id',getLikedSongs);

module.exports = router;