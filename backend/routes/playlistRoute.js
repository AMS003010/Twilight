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

router.post('/',createPlayList); //auth

router.put('/edit/:id',[validateObjectId,auth],editPlayList);

router.put('/add-song',addSongToPlayList);   //auth

router.put('/remove-song',auth,removeSong);

router.get('/favourite',auth,getUserPlayLists);

router.get('/random',getRandomPlaylists);   //auth

router.get('/:id',[validateObjectId,auth],getPlayList);

router.get('/',getAllPlayLists); //auth

router.delete('/:id',deletePlaylist);  //[validateObjectId,auth]

module.exports = router;