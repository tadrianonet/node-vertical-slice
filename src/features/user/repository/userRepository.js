const User = require('../models/userModel');

const createUser = async (userData) => {
  const user = new User(userData);
  return user.save();
};

module.exports = {
  createUser,
};
