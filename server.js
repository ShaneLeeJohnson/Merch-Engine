// imports express and assigns it to the express variable
const express = require('express');

// imports the routes from the routes/index.js file and assigns them to a routes variable
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection');

// runs express and saves it to an app variable
const app = express();

// creates a PORT variable that is equal to either the port that we define in the .env file or 3001
const PORT = process.env.PORT || 3001;

// middleware for handling json and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// custom middleware for handling our routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
