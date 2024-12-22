const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => res.render("login"));

router.get("/", (req, res) => res.render("home"));
router.get("/aboutus", (req, res) => res.render("aboutus"));
router.get("/services", (req, res) => res.render("services"));
router.get("/portfolio", (req, res) => res.render("portfolio"));
router.get("/contactus", (req, res) => res.render("contactus"));

module.exports = router;
