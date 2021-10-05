// require express
const express = require('express');

// express call
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware for the incoming data to be parsed
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// starts the server 
app.listen(PORT, () => {
    console.log(`App is currently listening on PORT ${PORT}`)
})