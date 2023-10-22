const express = require('express');
const router = express.Router();
const {
    createPlayList,
    editPlayList,
    addSongToPlayList,
    removeSong,
    getUserPlayLists,
    getRandomPlaylists,
    getPlayList,
    getAllPlayLists,
    deletePlaylist
} = require('../controllers/playlistController');
const auth = require('../middleware/auth');
const validateObjectId = require('../middleware/validateObjectId');

router.post('/',createPlayList);

router.put('/edit/:id',[validateObjectId,auth],editPlayList);

router.put('/add-song',auth,addSongToPlayList);

router.put('/remove-song',auth,removeSong);

router.get('/favourite',auth,getUserPlayLists);

router.get('/random',auth,getRandomPlaylists);

router.get('/:id',[validateObjectId,auth],getPlayList);

router.get('/',auth,getAllPlayLists);

router.delete('/:id',[validateObjectId,auth],deletePlaylist);

module.exports = router;