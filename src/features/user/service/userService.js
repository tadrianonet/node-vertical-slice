const userRepository = require('../repository/userRepository');

const createUser = async (userData) => {
  return userRepository.createUser(userData);
};

module.exports = {
  createUser,
};
