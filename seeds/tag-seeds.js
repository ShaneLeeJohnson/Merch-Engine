// Imports the Tag model
const { Tag } = require('../models');

// The data that will be seeded to the Tag models table
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// creates a function seedTags that runs bulkCreate with the data from this file
const seedTags = () => Tag.bulkCreate(tagData);

// Exports the seedTags function
module.exports = seedTags;
