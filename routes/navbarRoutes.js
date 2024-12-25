const express = require("express");
const Playlist = require("../models/Playlist");
const mongoose = require('mongoose'); // Add mongoose to the requires
const router = express.Router();

// let playlists = [
//     { id: 1, title: 'Some Music', artist: 'Some Person', genre: 'rock' },
//     { id: 2, title: 'Some Other Music', artist: 'Some Other Person', genre: 'hip-hop' },
//     { id: 3, title: 'Even More Music', artist: 'Some Other Person', genre: 'pop' },
//     { id: 4, title: 'Some Very Old Music', artist: 'Some Person', genre: 'classical' },
//     { id: 5, title: 'Some Very New Music', artist: 'Some Other Person', genre: 'EDM' }
// ];


router.get("/login", (req, res) => res.render("login"));

router.get("/", (req, res) => res.render("home"));
router.get("/aboutus", (req, res) => res.render("aboutus"));
router.get("/services", (req, res) => res.render("services"));
router.get("/portfolio", (req, res) => res.render("portfolio"));
router.get("/contactus", (req, res) => res.render("contactus"));


module.exports = router;
