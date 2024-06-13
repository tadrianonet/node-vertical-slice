process.env.NODE_ENV = 'test';
const request = require('supertest');
const express = require('express');
const userRoutes = require('../../../src/features/user/routes/userRoutes');
const db = require('../../../src/config/db');
const User = require('../../../src/features/user/models/userModel');

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

beforeAll(async () => {
  await db.connect();
});

afterEach(async () => {
  await User.deleteMany({});
});

describe('User Controller', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.name).toBe('John Doe');
    expect(response.body.email).toBe('john@example.com');
  });
});
