// imports the dotenv package
require('dotenv').config();

// imports the sequelize package and assigns it to the Sequelize class
const Sequelize = require('sequelize');

// creates a new sequelize connection using environment variables
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    // exports the sequelize connection
module.exports = sequelize;
