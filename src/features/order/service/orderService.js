const orderRepository = require('../repository/orderRepository');

const createOrder = async (orderData) => {
  return orderRepository.createOrder(orderData);
};

module.exports = {
  createOrder,
};
