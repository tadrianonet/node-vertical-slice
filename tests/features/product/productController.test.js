process.env.NODE_ENV = 'test';
const request = require('supertest');
const express = require('express');
const productRoutes = require('../../../src/features/product/routes/productRoutes');
const db = require('../../../src/config/db');
const Product = require('../../../src/features/product/models/productModel');

const app = express();
app.use(express.json());
app.use('/api', productRoutes);

beforeAll(async () => {
  await db.connect();
});

afterEach(async () => {
  await Product.deleteMany({});
});

describe('Product Controller', () => {
  it('should create a new product', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({
        name: 'Laptop',
        price: 1200,
        stock: 50,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.name).toBe('Laptop');
    expect(response.body.price).toBe(1200);
    expect(response.body.stock).toBe(50);
  });
});
