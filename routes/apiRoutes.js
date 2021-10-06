// to create to router object
const router = require('express').Router();
const UUID = require('uuid');
// to interact with database 
const fs = require("fs");

// Router for getting the notes from db.json
router.get('/api/notes', (req, res) => {
    // fs module used to correspond to db also used on line 24, and 40
    fs.readFile('./db/db.json', "UTF8", (err, data) => {
        // data being parsed from db.json also used on line 25, and 41
        const notes = JSON.parse(data);
        res.send(notes);
        // if theres errors it will be caught and displayed in the console
        if (err) {
            throw err;
        };
    });
});

// Router to post notes from the user, and also saves the notes created
router.post("/api/notes", (req, res) => {
    req.body.id = UUID.v1();
    fs.readFile(".db/db.json", "UTF8", (err, data) => {
        const notes = JSON.parse(data);
        notes.push(req.body);
        if (err) {
            throw err;
        };
        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
            res.json(req.body);
            if (err) {
                throw err;
            }
        });
    });
});

module.exports = router;