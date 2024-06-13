const productRepository = require('../repository/productRepository');

const createProduct = async (productData) => {
  return productRepository.createProduct(productData);
};

module.exports = {
  createProduct,
};
