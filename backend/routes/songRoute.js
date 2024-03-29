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
    getLikedSongs,
    getRandomSongs,
    getUserLikedSongs
} = require('../controllers/songController');

router.post('/',createSong); // admin needed

router.get('/',getAllSongs);

router.get('/liked',getUserLikedSongs);

router.get('/random',getRandomSongs);

router.put('/:id',[validateObjectId,admin],updateSong);

router.delete('/:id',[validateObjectId,admin],deleteSong);

router.put('/like/:id',likeSong); //,[validateObjectId,auth]

router.get('/like/:id',getLikedSongs);

module.exports = router;