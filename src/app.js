const express = require('express');
const userRoutes = require('./features/user/routes/userRoutes');
const productRoutes = require('./features/product/routes/productRoutes');
const orderRoutes = require('./features/order/routes/orderRoutes');
const db = require('./config/db');

const app = express();

app.use(express.json());
db.connect();

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

module.exports = app;
