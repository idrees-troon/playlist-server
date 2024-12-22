// File: models/Playlist.js

const mongoose = require('mongoose');

// Define the Playlist schema
const playlistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Title is required
        trim: true, // Removes extra whitespace
    },
    artist: {
        type: String,
        required: true, // Artist is required
        trim: true,
    },
    genre: {
        type: String,
        required: true, // Genre is required
        trim: true,
    },
}, { timestamps: true });

// Create the Playlist model
const Playlist = mongoose.model('Playlist', playlistSchema);

// Export the Playlist model
module.exports = Playlist;

