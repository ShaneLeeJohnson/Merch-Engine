// imports express and calls the Router method on it then assigns it to a router variable
const router = require('express').Router();

// imports the custom routes that we created
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// sets up custom middleware to use the imported routes
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Exports the router
module.exports = router;
