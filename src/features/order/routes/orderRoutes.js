const express = require('express');
const orderController = require('../controller/orderController');

const router = express.Router();

router.post('/orders', orderController.createOrder);

module.exports = router;
