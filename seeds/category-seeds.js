// imports the Category model
const { Category } = require('../models');

// The data that will be seeded to the Category models table
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// creates a function seedCategories that runs bulkCreate with the data from this file
const seedCategories = () => Category.bulkCreate(categoryData);

// exports the seedCategories function
module.exports = seedCategories;
