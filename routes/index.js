// imports express and calls the Router method on it then assigns it to a router variable
const router = require('express').Router();

// imports the index.js file from the api directory and sets it to the apiRoutes variable
const apiRoutes = require('./api');

// middleware to use the apiRoutes
router.use('/api', apiRoutes);

// default middleware that handles any requests to routes that don't exist
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// exports the router
module.exports = router;