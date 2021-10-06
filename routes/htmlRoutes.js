// Variables created for express router and path
const router = require('express').Router();
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// get method used to route for defining homepage route
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// router export
module.exports = router; 