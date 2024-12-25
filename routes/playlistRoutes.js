const express = require("express");
const Playlist = require("../models/Playlist");
const mongoose = require('mongoose');
const router = express.Router();

// View all playlists
router.get('/view-playlist', async (req, res) => {
    try {
        const playlist = await Playlist.find().exec();
        if (playlist) {
            res.render('view-playlist', { playlist });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error loading playlist items');
    }
});

// Render add playlist form
router.get('/add-playlist', (req, res) => {
    res.render('add-playlist');
});

// Add new playlist
router.post('/add-playlist', async (req, res) => {
    try {
        const playlist = new Playlist(req.body);
        await playlist.save();
        console.log("Saved Successfully");
        res.redirect('/view-playlist');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding playlist item');
    }
});

// Delete playlist
router.get('/delete-playlist/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send('Invalid playlist ID');
        }
        const playlist = await Playlist.findByIdAndDelete(req.params.id);
        if (!playlist) {
            return res.status(404).send('Playlist item not found');
        }
        res.redirect('/view-playlist');
    } catch (error) {
        console.error('Error deleting playlist item:', error);
        res.status(500).send('Error deleting playlist item');
    }
});

// Display edit form
router.get('/edit-playlist/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send('Invalid playlist ID');
        }
        const playlist = await Playlist.findById(req.params.id);
        if (!playlist) {
            return res.status(404).send('Playlist item not found');
        }
        res.render('edit-playlist', { playlist });
    } catch (error) {
        console.error('Error loading playlist item:', error);
        res.status(500).send('Error loading playlist item');
    }
});

// Update playlist
router.post('/edit-playlist/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send('Invalid playlist ID');
        }
        const { title, artist, genre } = req.body;
        const playlist = await Playlist.findByIdAndUpdate(
            req.params.id,
            { title, artist, genre },
            { new: true, runValidators: true }
        );
        if (!playlist) {
            return res.status(404).send('Playlist item not found');
        }
        res.redirect('/view-playlist');
    } catch (error) {
        console.error('Error updating playlist item:', error);
        res.status(500).send('Error updating playlist item');
    }
});

// View specific playlist
router.get('/playlist/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send('Invalid playlist ID');
        }
        const playlist = await Playlist.findById(req.params.id);
        if (!playlist) {
            return res.status(404).send('Playlist not found');
        }
        res.render('playlist-detail', { playlist });
    } catch (error) {
        console.error('Error loading playlist:', error);
        res.status(500).send('Error loading playlist');
    }
});

module.exports = router;
