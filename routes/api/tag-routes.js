const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  if (!req.body.tag_name) {
    return res.status(400).json({ message: 'Tag name is required!' });
  }

  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  if (!req.body.tag_name) {
    return res.status(400).json({ message: 'Tag name is required!' });
  }

  try {
    const tagData = await Tag.findByPk(req.params.id);

    if (!tagData) {
      return res.status(404).json({ message: 'No tag found with that id!' });
    }

    tagData.tag_name = req.body.tag_name;
    await tagData.save();

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update tag' });
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
