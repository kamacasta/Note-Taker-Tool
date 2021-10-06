// require express
const express = require('express');

// express call
const app = express();

const PORT = process.env.PORT || 3001;

// Route variables
const htmlRoute = require('./routes/htmlRoutes');
const apiRoute = require('./routes/apiRoutes');

// Parse income data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// routes can be used
app.use('/api', apiRoute);
app.use("/", htmlRoute);

app.listen(PORT, () => {
    console.log(`App is now listening on PORT ${PORT}`);
});