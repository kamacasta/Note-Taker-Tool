// to create to router object
const router = require('express').Router();
// to interact with database 
const fs = require("fs");
const path = require('path');

// Gets the notes data
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});




router.get
module.exports = router;