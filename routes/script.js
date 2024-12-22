const express = require("express");
const Playlist = require("../models/Playlist");
const router = express.Router();

let playlist = [
    { id: 1, title: 'Some Music', artist: 'Some Person', genre: 'rock' },
    { id: 2, title: 'Some Other Music', artist: 'Some Other Person', genre: 'hip-hop' },
    { id: 3, title: 'Even More Music', artist: 'Some Other Person', genre: 'pop' },
    { id: 4, title: 'Some Very Old Music', artist: 'Some Person', genre: 'classical' },
    { id: 5, title: 'Some Very New Music', artist: 'Some Other Person', genre: 'EDM' }
];


router.get("/login", (req, res) => res.render("login"));

router.get("/", (req, res) => res.render("home"));
router.get("/aboutus", (req, res) => res.render("aboutus"));
router.get("/services", (req, res) => res.render("services"));
router.get("/portfolio", (req, res) => res.render("portfolio"));
router.get("/contactus", (req, res) => res.render("contactus"));
router.get("/contactus", (req, res) => res.render("contactus"));

router.get('/view-playlist', (req, res) => {
    res.render('view-playlist', { playlist });
});

// Route to render the add-playlist page
router.get('/add-playlist', (req, res) => {
    res.render('add-playlist'); // Render the add-playlist.ejs file
});

router.post('/add-playlist', async (req, res) => {

    const { title, artist, genre } = req.body;
    // const newPlaylistItem = {
    //     id: Math, // Generate a unique ID based on the current timestamp
    //     title,
    //     artist ,
    //     genre: genre // Convert genres to an array
    // };

    try {
        // Here you would typically add the newPlaylistItem to your data store
        // For example, if you have an array called playlists:
        // playlist.push(newPlaylistItem);
        const playlist = new Playlist(req.body);
        await playlist.save();
        console.log("Saved Sucessfully")

        // res.render('view-playlist', { playlist });
        res.render("home")
    } catch (error) {
        console.log(error);
        res.status(500).send('Error adding playlist item');
    }
});





// router.get("/playlists", async (req, res) => {
//   const playlists = await Playlist.find().exec();
//   res.json(playlists);
// });

// router.post("/playlists", async (req, res) => {
//   const playlist = new Playlist(req.body);
//   await playlist.save();
//   res.json(playlist);
// });


module.exports = router;
