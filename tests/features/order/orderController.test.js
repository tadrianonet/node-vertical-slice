process.env.NODE_ENV = 'test';
const request = require('supertest');
const express = require('express');
const orderRoutes = require('../../../src/features/order/routes/orderRoutes');
const db = require('../../../src/config/db');
const Order = require('../../../src/features/order/models/orderModel');

const app = express();
app.use(express.json());
app.use('/api', orderRoutes);

beforeAll(async () => {
  await db.connect();
});

afterEach(async () => {
  await Order.deleteMany({});
});

describe('Order Controller', () => {
  it('should create a new order', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({
        user: '60d0fe4f5311236168a109ca', // Example user ID
        product: '60d0fe4f5311236168a109cb', // Example product ID
        quantity: 2,
        total: 2400,
        date: '2024-01-01T00:00:00Z',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.quantity).toBe(2);
    expect(response.body.total).toBe(2400);
  });
});
