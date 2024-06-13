const Product = require('../models/productModel');

const createProduct = async (productData) => {
  const product = new Product(productData);
  return product.save();
};

module.exports = {
  createProduct,
};
