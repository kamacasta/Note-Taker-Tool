// to create to router object
const router = require('express').Router();
// to interact with database 
const fs = require("fs");


router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', "utf-8", (err, data) => {
        const notes = JSON.parse(data);
        res.send(notes);
        if (err) {
            throw err;
        }
    })
})

router.post('/api/notes', (req, res) => {

})

router.delete('', (req, res) => {
    
})

