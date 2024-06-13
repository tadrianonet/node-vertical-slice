const express = require('express');
const productController = require('../controller/productController');

const router = express.Router();

router.post('/products', productController.createProduct);

module.exports = router;
