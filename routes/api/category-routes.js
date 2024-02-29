// imports express and calls the Router method on it then assigns it to a router variable
const router = require('express').Router();

// imports the models that will be used in this route
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// This route will get all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// This route will get a specific category by its id value
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// This route will create a new category
router.post('/', async (req, res) => {
  if (!req.body.category_name) {
    return res.status(400).json({ message: 'Category name is required!' });
  }

  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// This route will update an existing category by referencing its id
router.put('/:id', async (req, res) => {
  if (!req.body.category_name) {
    return res.status(400).json({ message: 'Category name is required!' });
  }

  try {
    const categoryData = await Category.findByPk(req.params.id);

    if (!categoryData) {
      return res.status(404).json({ message: 'No category found with that id!' });
    }

    categoryData.category_name = req.body.category_name;
    await categoryData.save();

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update category' });
  }
});

// This route will delete an existing category by referencing its id
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Exports the router
module.exports = router;
